import { Prisma } from 'prisma-binding';

const prisma = new Prisma({
    typeDefs: './src/generated/prisma.graphql',
    endpoint: 'http://localhost:4466',
});

// prisma.query.users(null, '{ id name posts { id title } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.query.comments(null, '{ id text author { id name } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
// });

// prisma.mutation
//     .createPost(
//         {
//             data: {
//                 title: 'GraphQL 101',
//                 body: 'Lorem ipsum...',
//                 published: true,
//                 author: {
//                     connect: {
//                         id: '5ecd9a7be03dd8000784d3f4',
//                     },
//                 },
//             },
//         },
//         '{ id title body published }'
//     )
//     .then((data) => {
//         console.log(data);
//         return prisma.query.users(null, '{ id name posts { id title } }');
//     })
//     .then((data) => {
//         console.log(JSON.stringify(data, undefined, 2));
//     });

prisma.mutation
    .updatePost({
        where: {
            id: '5ed970d5e03dd80007d41fc2',
        },
        data: {
            body: 'How to get started with Rust...',
            published: false,
        },
    })
    .then((data) => {
        return prisma.query.posts(null, '{ id title body published }');
    })
    .then((data) => {
        console.log(data);
    });
