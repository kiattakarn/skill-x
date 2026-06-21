== Command for add data into localstorage ==

localStorage.setItem('skillx_users', JSON.stringify([
  { email: 'test@skillx.com', password: '1234', name: 'Test User' },
  { email: 'kiat@skillx.com', password: 'abc123', name: 'Kiat' }
]))

===

localStorage.setItem('skillx_session', JSON.stringify({
  email: 'test@test.com',
  name: 'Kiat',
  targetToken: 1200,
  collectToken: 450
}))

== Command for check data in localStorage ==

JSON.parse(localStorage.getItem('skillx_users'))

===


JSON.parse(localStorage.getItem('skillx_session'))


== Coomand for delete data in localStorage ==

localStorage.removeItem('skillx_users')

== Coomand for delete all data in localStorage ==

localStorage.clear()    