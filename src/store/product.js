import { create } from "zustand";

export const userProductStore = create((set)=> ({
    products: [],

    setProducts: (products) => set({products}),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.price||!newProduct.image){
         return {success: false, message: "Please fill all fields."};   
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct),
        })
        const data = await res.json();
        set((state)  => ({products: [...state.products, data.data] }))
        return {success: true, message: "Product created successfully"}
    },
    fetchProducts: async () => {
    console.log("Fetching products..."); // DEBUG

    try {
        const res = await fetch("/api/products");
        console.log("Response received:", res); // DEBUG

        if (!res.ok) {
            console.error(`HTTP error! status: ${res.status}`);
            return;
        }

        const contentType = res.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            console.error("Expected JSON response, but received a different content type.");
            return;
        }

        const data = await res.json();
        console.log("Fetched products data:", data); // DEBUG
        set({ products: data.data });
    } catch (error) {
        console.error("Error during fetchProducts:", error);
    }
    },
    deleteProduct: async(pid) =>{
        const res = await fetch(`/api/products/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();

        if(!data.success) return {success: false, message: data.message};

        set((state) => ({products: state.products.filter(product => product._id !== pid)}))
        return{success: true, message: data.message}
    },



    
    updateProduct: async(pid, updatedProduct) =>{
        const res = await fetch(`/api/products/${pid}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        });

        const data = await res.json();

        if(!data.success) return {success: false, message: data.message};

        set(state => ({
            products: state.products.map((product) => (product._id === pid ? data.data : product)),
        }))
        return{success: true, message: data.message}
    }
}));
