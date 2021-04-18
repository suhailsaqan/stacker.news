import Layout from '../components/layout'
import React from 'react'
import Items from '../components/items'

// function Users () {
//   const { loading, error, data } = useQuery(gql`{ users { id, name } }`)
//   if (error) return <div>Failed to load</div>
//   if (loading) return <div>Loading...</div>
//   const { users } = data
//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>{user.name}</div>
//       ))}
//     </div>
//   )
// }

// function NewItem ({ parentId }) {
//   const [session] = useSession()
//   const [createItem] = useMutation(
//     gql`
//       mutation CreateItem($text: String!, $parentId: ID) {
//         createItem(text: $text, parentId: $parentId) {
//           id
//         }
//       }`, {
//       update (cache, { data: { createItem } }) {
//         cache.modify({
//           fields: {
//             items (existingItems = [], { readField }) {
//               const newItemRef = cache.writeFragment({
//                 data: createItem,
//                 fragment: gql`
//                     fragment NewItem on Item {
//                       id
//                       user {
//                         name
//                       }
//                       text
//                       depth
//                     }
//                   `
//               })
//               for (let i = 0; i < existingItems.length; i++) {
//                 if (readField('id', existingItems[i]) === parentId) {
//                   return [...existingItems.slice(0, i), newItemRef, ...existingItems.slice(i)]
//                 }
//               }
//               return [newItemRef, ...existingItems]
//             }
//           }
//         })
//       }
//     })
//   const [open, setOpen] = useState(false)

//   if (!session) return null

//   if (!open) {
//     return (
//       <div onClick={() => setOpen(true)}>
//         {parentId ? 'reply' : 'submit'}
//       </div>
//     )
//   }

//   let text
//   return (
//     <form
//       style={{ marginLeft: '5px' }}
//       onSubmit={e => {
//         e.preventDefault()
//         createItem({ variables: { text: text.value, parentId } })
//         setOpen(false)
//         text.value = ''
//       }}
//     >
//       <textarea
//         ref={node => {
//           text = node
//         }}
//       />
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }

export default function Index () {
  return (
    <Layout>
      <Items />
    </Layout>
  )
}