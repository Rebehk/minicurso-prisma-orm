import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crie alguns usuários de exemplo
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'password1',
      fullName: 'User One',
      role: 'admin', 
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: 'password2',
      fullName: 'User Two',
      role: 'user',
    },
  });

  // Crie perfis para os usuários
  const profile1 = await prisma.profile.create({
    data: {
      bio: 'Bio do usuário 1',
      avatar: 'avatar1.jpg',
      userId: user1.id,
    },
  });

  const profile2 = await prisma.profile.create({
    data: {
      bio: 'Bio do usuário 2',
      avatar: 'avatar2.jpg',
      userId: user2.id,
    },
  });

  // Crie algumas receitas de exemplo
  const recipe1 = await prisma.recipe.create({
    data: {
      author: user1.id,
      title: 'Receita 1',
      ingredients: ['Ingrediente A', 'Ingrediente B'],
    },
  });

  const recipe2 = await prisma.recipe.create({
    data: {
      author: user2.id,
      title: 'Receita 2',
      ingredients: ['Ingrediente X', 'Ingrediente Y'],
    },
  });

  const recipe3 = await prisma.recipe.create({
    data: {
      author: user2.id,
      title: 'iorgute de morango',
      ingredients: ['leite', 'morango'],
    },
  });
const recipe4 = await prisma.recipe.create({
    data: {
      author: user1.id,
      title: 'pizza',
      ingredients: ['queijo', 'magericão'],
    },
  });
const recipe5 = await prisma.recipe.create({
    data: {
      author: user2.id,
      title: 'Pé de Moleque',
      ingredients: ['amendoin', 'açucar'],
    },
  });
const recipe6 = await prisma.recipe.create({
    data: {
      author: user1.id,
      title: 'Tapioca de queijo',
      ingredients: ['tápioca', 'queijo'],
    },
  });
const recipe7 = await prisma.recipe.create({
    data: {
      author: user2.id,
      title: 'arroz a grega',
      ingredients: ['arroz', 'legumes'],
    },
  });
const recipe8 = await prisma.recipe.create({
    data: {
      author: user2.id,
      title: 'risoto de camarão',
      ingredients: ['arroz', 'camarão'],
    },
  });
const recipe9 = await prisma.recipe.create({
    data: {
      author: user1.id,
      title: 'pudim',
      ingredients: ['leite', 'leite condensado '],
    },
  });
const recipe10 = await prisma.recipe.create({
    data: {
      author: user1.id,
      title: 'sopa',
      ingredients: ['legumes', 'temperos', 'macarrão'],
    },
  });

  

  // Crie alguns comentários de exemplo
  const comment1 = await prisma.comment.create({
    data: {
      author: user1.id,
      comment: 'Comentário na receita 2',
      userId: user1.id,
      recipeId: recipe2.id,
    },
  });

  const comment2 = await prisma.comment.create({
    data: {
      author: user2.id,
      comment: 'Comentário na receita 1',
      userId: user2.id,
      recipeId: recipe10.id,
    },
  });

  const comment3 = await prisma.comment.create({
    data: {
      author: user1.id,
      comment: 'Comentário na receita 2',
      userId: user1.id,
      recipeId: recipe7.id,
    },
  });

  const comment4 = await prisma.comment.create({
    data: {
      author: user2.id,
      comment: 'Comentário na receita 1',
      userId: user2.id,
      recipeId: recipe1.id,
    },
  });

  // Crie algumas curtidas de exemplo
  const like1 = await prisma.like.create({
    data: {
      likedBy: user1.id,
      userId: user1.id,
      recipeId: recipe2.id,
    },
  });

  const like2 = await prisma.like.create({
    data: {
      likedBy: user2.id,
      userId: user2.id,
      recipeId: recipe1.id,
    },
  });
  const like3 = await prisma.like.create({
    data: {
      likedBy: user2.id,
      userId: user2.id,
      recipeId: recipe4.id,
    },
  });
  const like4 = await prisma.like.create({
    data: {
      likedBy: user1.id,
      userId: user1.id,
      recipeId: recipe9.id,
    },
  });

  console.log('Dados de exemplo foram criados com sucesso.');
}

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
