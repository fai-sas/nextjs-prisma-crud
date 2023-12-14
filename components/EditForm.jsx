'use client'

import { editTask } from '@/utils/actions'

const EditForm = ({ task }) => {
  const { id, content, completed } = task

  return (
    <form
      action={editTask}
      className='max-w-sm p-12 border rounded-lg bg-base-100 border-base-300'
    >
      <input type='hidden' name='id' value={id} />
      {/* content */}

      <input
        type='text'
        required
        defaultValue={content}
        name='content'
        className='w-full input input-bordered'
      />

      {/* completed */}
      <div className='my-4 form-control'>
        <label className='cursor-pointer label'>
          <span className='label-text'>Completed</span>
          <input
            type='checkbox'
            defaultChecked={completed}
            name='completed'
            className='checkbox checkbox-primary checkbox-sm'
          />
        </label>
      </div>
      <button className='btn btn-primary btn-block btn-sm'>edit</button>
    </form>
  )
}
export default EditForm
