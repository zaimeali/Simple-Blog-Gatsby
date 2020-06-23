// exports.createPages = async function({ actions, graphql }) {
//     const { data } = await graphql`
//         query {
//             allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 edges {
//                   node {
//                     frontmatter {
//                       slug
//                     }
//                     id
//                   }
//                 }
//             }
//         }
//     `
//     // Create Paginate Pages for Posts
//     const postPerPage = 3;

//     const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//     Array.from({ length: numPages }).forEach((_, i) => {
//         actions.createPages({
//             path: i === 0 ? `/` : `/${i + 1}`,
//             component: require.resolve("./src/templates/allPosts.js"),
//             context: {
//                 limit: postPerPage, //to return 3 items
//                 skip: i * postPerPage, // if i = 0 so it'll not skip any . if i = 1 so it'll skip 3 and start from 4
//                 numPages,
//                 currentPage: i + 1,
//             }
//         })
//     })

//     // Create Single Blog Posts
//     data.allMdx.edges.forEach((edge) => {
//         const slug = edge.node.frontmatter.slug;
//         const id = edge.node.id;
//         actions.createPages({
//             path: slug,
//             component: require.resolve('./src/templates/singlePost.js'),
//             context: {
//                 id
//             },
//         })
//     })
// }