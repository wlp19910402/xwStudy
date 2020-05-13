export default function guards(to, from, next) {
  console.log('to.name', to.path, 'from.name', from.path)
  next()
}
