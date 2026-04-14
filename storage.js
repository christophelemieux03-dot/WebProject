const Storage ={
    get(key){
        try{
            return JSON.parse(localStorage.getItem(key)) || null;
        } catch {
            return null;
        }
    },

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    remove(key){
        localStorage.removeItem(key);
    },

    clear(){
        localStorage.clear();
    }
};


const UserStorage = {
    register(user){
        Storage.set("registeredUser", user);
    },

    getUser(){
        return Storage.get("registeredUser");
    },

    login(UserData){
        Storage.set("loggedInUser", UserData);
    },

    getLoggedInUser(){
        return Storage.get("loggedInUser");
    },

    logout() {
        Storage.remove("loggedInUser");
    }
};



const CartStorage = {
    getCart(){
        return Storage.get("cart") || [];
    },

    saveCart(cart){
        Storage.set("cart", cart);
    },

    addItem(product){
        let cart = this.getCart();

        const index = cart.findIndex(item => item.name === product.name);

        if(index !== -1){
            cart[index].quantity += product.quantity;
        } else {
            cart.push(product);
        }

        this.saveCart(cart);
    },

    updateQuantity(index, quantity){
        let cart = this.getCart();
        cart[index].quantity = quantity;
        this.saveCart(cart);
    },

    clearCart(){
        Storage.remove("cart");
    }
};


const OrderStorage = {
    saveOrder(order){
        Storage.set("lastOrder", order);
    },

    getLastOrder(){
        return Storage.get("lastOrder");
    }
};


const WishlistStorage = {
    getWishlist(){
        return Storage.get("wishlist") || [];
    },

    addItem(name){
        let wishlist = this.getWishlist();

        if(!wishlist.include(name)){
            wishlist.push(name);
            Storage.set("wishlist", wishlist);
        }
    }
};


const ContactStorage = {
    saveMessage(message){
        let message = Storage.get("contactMessages") || [];
        message.push(message);
        Storage.set("contactMessages", messages);
    }
};