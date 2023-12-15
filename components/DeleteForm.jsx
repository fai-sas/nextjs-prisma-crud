'use client'

import { useFormStatus } from 'react-dom'
import { deleteTask } from '@/utils/actions'

const DeleteButton = () => {
  const { pending } = useFormStatus()

  return (
    <button className='btn btn-error btn-xs' disabled={pending}>
      {pending ? 'pending...' : 'delete'}
    </button>
  )
}

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <DeleteButton />
    </form>
  )
}
export default DeleteForm
