export default function guards(to, from, next) {
  console.log('to.name', to.name, 'from.name', from.name)
  next()
}
