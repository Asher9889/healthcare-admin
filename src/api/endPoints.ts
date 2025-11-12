export const endPoints = {
    createBlog: {
        url: `/blogs`,
        method: 'POST',
    },
    getAllBlogs: {
        url: `/blogs`,
        method: 'GET',
    },
    getBlog: {
        url: "/blogs/:slug",
        method: "GET"
    },
    updateBlog: {
        url: "/blogs/:slug",
        method: "PUT"
    }
}
