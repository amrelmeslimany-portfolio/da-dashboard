function initProducts() {
    return {
        // LN Products Preview
        productsView(req, res) {
            res.render("pages/products/products", {
                title: "AD - Products"
            })
        }

        ,
        // LN Product Details Preview
        productDetailView(req, res) {
            res.render("pages/products/product-details", {
                title: "AD - Product Name"
            })
        }

        ,
        // LN Orders Preview
        ordersView(req, res) {
            res.render("pages/products/orders", {
                title: "AD - Orders"
            })
        }

        ,

        // LN Customers Preview
        customersView(req, res) {
            res.render("pages/products/customers", {
                title: "AD - Customers"
            })
        }

        ,
        // LN Cart Preview
        cartView(req, res) {
            res.render("pages/products/cart", {
                title: "AD - Cart"
            })
        }

        ,
        // LN Checkout Preview
        checkoutView(req, res) {
            res.render("pages/products/checkout", {
                title: "AD - Checkout"
            })
        }

        ,
        // LN Shops Preview
        shopsView(req, res) {
            res.render("pages/products/shops", {
                title: "AD - Shops"
            })
        }

        ,
        // LN Add Product Preview
        addNewProductView(req, res) {
            res.render("pages/products/add-product", {
                title: "AD - Add New Product"
            })
        }

        ,

    }
}


module.exports = initProducts