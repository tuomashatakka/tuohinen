import { MaterialIcon } from 'material-icons'

export default function Icon ({ name }: { name: MaterialIcon }) {
  return <span className='material-icons'>{ name }</span>
}