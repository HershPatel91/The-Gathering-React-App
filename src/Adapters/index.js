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
     headers: headers(),
     body: JSON.stringify({
       user: user
     })
   }).then(response => response.json() )
}
}

export class MessagesAdapter  {

  static create(message){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        party: {message: message.message, party_id: message.party_id, user_id: message.user_id}
      })
    }).then(response => response.json() )
  }

  static url(){
    return `${baseUrl}/messages`
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


export class PartyGuestsAdapter  {

  static create(partyguest){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        partyguest: {guest_id: partyguest.guest_id, party_id: partyguest.party_id, status: "applied"}
      })
    }).then(response => response.json() )
  }

  static update(partyguest){
    return fetch(`${this.url()}/${partyguest.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        partyguest: {id: partyguest.id, status: partyguest.status}
      })
    }).then(response => response.json())
  }

  static url(){
    return `${baseUrl}/party_guests`
  }
}

export class FriendshipAdapter  {

   static all(){
    return fetch(`${this.url()}`, {
      headers: headers()
    })
      .then( res => res.json() )
  }

  static create(friendship){
    return fetch(`${this.url()}`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({
        friendship: {related_user_id: friendship.related_user_id, user_id: friendship.user_id, status: "requested"}
      })
    }).then(response => response.json() )
  }

  static update(friendship){
    return fetch(`${this.url()}/${friendship.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        friendship: {id: friendship.id, status: friendship.status}
      })
    }).then(response => response.json())
  }

  static url(){
    return `${baseUrl}/friendships`
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
        user: {email: user.email, password: user.password, name: user.name, description: user.description, gender: user.gender, age: user.age, picture: user.picture}
      })
    }).then(response => response.json() )
  }

  static update(user){
    return fetch(`${this.url()}/${user.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        user: {name: user.name, description: user.description, gender: user.gender, age: user.age, picture: user.picture}
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
    'Authorization': localStorage.getItem('user_id')
  }
}

