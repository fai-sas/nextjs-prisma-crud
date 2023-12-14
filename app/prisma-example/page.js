import prisma from '@/utils/db'

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: 'hello world',
    },
  })
  const allTasks = await prisma.task.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return allTasks
}

const PrismaExample = async () => {
  const tasks = await prismaHandlers()

  return (
    <>
      <h1 className='mb-4 text-3xl font-medium'>Prisma Example </h1>
      {tasks.map((task) => {
        return (
          <h2 key={task.id} className='py-2 text-xl'>
            {task.content}{' '}
          </h2>
        )
      })}
    </>
  )
}
export default PrismaExample
