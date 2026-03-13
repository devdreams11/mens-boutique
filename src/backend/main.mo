import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Nat "mo:core/Nat";
import Set "mo:core/Set";

actor {
  // Types
  type Category = {
    id : Nat;
    name : Text;
    slug : Text;
    itemCount : Nat;
  };

  type Product = {
    id : Nat;
    name : Text;
    brand : Text;
    category : Text; // slug
    price : Float;
    originalPrice : Float;
    discount : Nat; // percentage
    rating : Float;
    reviewCount : Nat;
    sizes : [Text];
    colors : [Text];
    isNew : Bool;
    isTrending : Bool;
  };

  type CartItem = {
    productId : Nat;
    quantity : Nat;
    size : Text;
    color : Text;
  };

  module Product {
    public func compare(p1 : Product, p2 : Product) : Order.Order {
      Nat.compare(p1.id, p2.id);
    };

    public func compareByName(p1 : Product, p2 : Product) : Order.Order {
      Text.compare(p1.name, p2.name);
    };
  };

  module Category {
    public func compare(c1 : Category, c2 : Category) : Order.Order {
      Nat.compare(c1.id, c2.id);
    };
  };

  // Persistent storage
  let categories = Map.empty<Nat, Category>();
  let products = Map.empty<Nat, Product>();
  let wishlists = Map.empty<Principal, Set.Set<Nat>>();
  let carts = Map.empty<Principal, Map.Map<Nat, CartItem>>();

  var nextCategoryId = 1;
  var nextProductId = 1;

  // Category Functions
  public shared ({ caller }) func addCategory(name : Text, slug : Text) : async Nat {
    let id = nextCategoryId;
    categories.add(id, { id; name; slug; itemCount = 0 });
    nextCategoryId += 1;
    id;
  };

  public query ({ caller }) func getAllCategories() : async [Category] {
    categories.values().toArray().sort();
  };

  // Product Functions
  public shared ({ caller }) func addProduct(
    name : Text,
    brand : Text,
    category : Text,
    price : Float,
    originalPrice : Float,
    discount : Nat,
    sizes : [Text],
    colors : [Text],
    isNew : Bool,
    isTrending : Bool,
  ) : async Nat {
    let id = nextProductId;
    products.add(
      id,
      {
        id;
        name;
        brand;
        category;
        price;
        originalPrice;
        discount;
        rating = 0.0;
        reviewCount = 0;
        sizes;
        colors;
        isNew;
        isTrending;
      },
    );
    nextProductId += 1;
    id;
  };

  public query ({ caller }) func getProductById(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product not found") };
      case (?product) { product };
    };
  };

  public query ({ caller }) func getProductsByCategory(category : Text) : async [Product] {
    products.values().toArray().filter(
      func(p) { p.category == category }
    );
  };

  public query ({ caller }) func searchProducts(searchText : Text) : async [Product] {
    let searchLower = searchText.toLower();
    products.values().toArray().filter(
      func(p) {
        p.name.toLower().contains(#text searchLower) or
        p.brand.toLower().contains(#text searchLower)
      }
    );
  };

  // Wishlist Functions
  public shared ({ caller }) func addToWishlist(productId : Nat) : async () {
    if (not products.containsKey(productId)) {
      Runtime.trap("Product not found");
    };

    let wishlist = switch (wishlists.get(caller)) {
      case (null) {
        let newWishlist = Set.empty<Nat>();
        wishlists.add(caller, newWishlist);
        newWishlist;
      };
      case (?existing) { existing };
    };

    wishlist.add(productId);
  };

  public shared ({ caller }) func removeFromWishlist(productId : Nat) : async () {
    switch (wishlists.get(caller)) {
      case (null) { Runtime.trap("Wishlist is empty") };
      case (?wishlist) {
        if (wishlist.contains(productId)) {
          wishlist.remove(productId);
        } else {
          Runtime.trap("Product not in wishlist");
        };
      };
    };
  };

  public query ({ caller }) func getWishlist() : async [Product] {
    switch (wishlists.get(caller)) {
      case (null) { [] };
      case (?wishlist) {
        wishlist.toArray().map(
          func(id) {
            switch (products.get(id)) {
              case (null) { Runtime.trap("Product not found") };
              case (?product) { product };
            };
          }
        );
      };
    };
  };

  // Cart Functions
  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat, size : Text, color : Text) : async () {
    if (not products.containsKey(productId)) {
      Runtime.trap("Product not found");
    };

    let cart = switch (carts.get(caller)) {
      case (null) {
        let newCart = Map.empty<Nat, CartItem>();
        carts.add(caller, newCart);
        newCart;
      };
      case (?existing) { existing };
    };

    switch (cart.get(productId)) {
      case (null) {
        cart.add(productId, { productId; quantity; size; color });
      };
      case (?existingItem) {
        cart.add(productId, {
          existingItem with
          quantity = existingItem.quantity + quantity;
        });
      };
    };
  };

  public shared ({ caller }) func removeFromCart(productId : Nat) : async () {
    switch (carts.get(caller)) {
      case (null) { Runtime.trap("Cart is empty") };
      case (?cart) {
        if (cart.containsKey(productId)) {
          cart.remove(productId);
        } else {
          Runtime.trap("Product not in cart");
        };
      };
    };
  };

  public shared ({ caller }) func updateCartItem(productId : Nat, quantity : Nat) : async () {
    switch (carts.get(caller)) {
      case (null) { Runtime.trap("Cart is empty") };
      case (?cart) {
        switch (cart.get(productId)) {
          case (null) { Runtime.trap("Product not in cart") };
          case (?item) {
            cart.add(productId, { item with quantity });
          };
        };
      };
    };
  };

  public query ({ caller }) func getCart() : async [CartItem] {
    switch (carts.get(caller)) {
      case (null) { [] };
      case (?cart) { cart.values().toArray() };
    };
  };
};
