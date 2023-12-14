import { createTask } from '@/utils/actions'

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='w-full join'>
        <input
          className='w-full input input-bordered join-item'
          placeholder='Content'
          type='text'
          name='content'
          required
        />
        <button type='submit' className='btn join-item btn-primary'>
          create task
        </button>
      </div>
    </form>
  )
}
export default TaskForm
