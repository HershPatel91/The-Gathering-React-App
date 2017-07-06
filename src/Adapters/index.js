const baseUrl = 'http://localhost:3000/api/v1'

export class AuthAdapter {
  static login(loginParams){
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json() )
  }

  static currentUser(user){
   return fetch(`${baseUrl}/current_user`, {
     method: 'POST',
     headers: {
       'content-type': 'application/json',
       'accept': 'application/json'
     },
     body: JSON.stringify({
       user: user
     })
   }).then(response => response.json() )
}
}

export class PartiesAdapter  {
  static all(){
    return fetch(`${this.url()}`, {
      headers: headers()
    })
      .then( res => res.json() )
  }

  static create(party){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        party: {title: party.title, date: party.date, time: party.time, description: party.description, location: party.location, location_area: party.location_area, capacity: party.capacity, cover: party.cover, image: party.image, admin_id: party.admin_id}
      })
    }).then(response => response.json() )
  }

  static update(party){
    return fetch(`${this.url()}/${party.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        party: {title: party.title, date: party.date, time: party.time, description: party.description, location: party.location, location_area: party.location_area, capacity: party.capacity, cover: party.cover, image: party.image, admin_id: party.admin_id}
      })
    })
  }

  static destroy(id){
    return fetch(`${this.url()}/${id}`, {
      method: 'DELETE',
      headers: headers()
    }).then(res => res.json() )
  }

  static url(){
    return `${baseUrl}/parties`
  }
}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    // 'Authorization': localStorage.getItem('user_id')
  }
}

export class UsersAdapter  {
  static all(){
    return fetch(`${this.url()}`, {
      headers: headers()
    })
      .then( res => res.json() )
  }

  static create(user){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        user: {email: user.email, password: user.password, name: user.name, gender: user.gender, age: user.age, picture: user.picture}
      })
    }).then(response => response.json() )
  }

  static update(user){
    return fetch(`${this.url()}/${user.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        user: {email: user.email, password: user.password, name: user.name, gender: user.gender, age: user.age, picture: user.picture}
     })
    })
  }

  static destroy(id){
    return fetch(`${this.url()}/${id}`, {
      method: 'DELETE',
      headers: headers()
    }).then(res => res.json() )
  }

  static url(){
    return `${baseUrl}/users`
  }
}

function headers(){
  return {
    'content-type': 'application/json',
    'accept': 'application/json',
    // 'Authorization': localStorage.getItem('user_id')
  }
}

