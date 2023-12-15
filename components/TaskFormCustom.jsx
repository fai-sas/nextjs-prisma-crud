'use client'

import { createTaskCustom } from '@/utils/actions'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'
// The useFormStatus Hook provides status information of the last form submission.
// useFormState is a Hook that allows you to update state based on the result of a form action.

const SubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='btn join-item btn-primary'
      disabled={pending}
    >
      {pending ? 'please wait... ' : 'create task'}
    </button>
  )
}

const initialState = {
  message: null,
}

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)

  useEffect(() => {
    if (state.message === 'error') {
      toast.error('there was an error')
      return
    }
    if (state.message) {
      toast.success('task added')
    }
  }, [state])

  return (
    <form action={formAction}>
      {state.message ? <p className='mb-2'>{state.message}</p> : null}

      <div className='w-full join'>
        <input
          className='w-full input input-bordered join-item'
          placeholder='Content'
          type='text'
          name='content'
          required
        />
        <SubmitButton />
      </div>
    </form>
  )
}
export default TaskForm
