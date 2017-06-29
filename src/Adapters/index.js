const baseUrl = 'http://localhost:3000/api/v1'

export class AuthAdapter {
  static login(loginParams){
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json() )
  }

  static currentUser(){
    return fetch(`${baseUrl}/current_user`, {
      headers: headers()
    }).then(res => res.json() )
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
        party: {title: party.title, date: party.date, description: party.description, location: party.location, capacity: party.capacity, images: party.images, rating: party.rating, admin_id: party.admin_id}
      })
    }).then(response => response.json() )
  }

  static update(party){
    return fetch(`${this.url()}/${party.id}`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify({
        party: {title: party.title, date: party.date, description: party.description, location: party.location, capacity: party.capacity, images: party.images, rating: party.rating, admin_id: party.admin_id}
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
