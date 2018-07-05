class Dummy {
  constructor(o) {
    this.o = o
  }

  static string(min = 2, max = 32) {
    const alphanum = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return () => Array(1 + Math.floor(Math.random()*(max + 1 - min) + min)).join('.').split('')
      .map(x => alphanum.charAt(Math.floor(Math.random() * alphanum.length)))
      .join('')
  }

  static number(min = 0, max = 1000) {
    return () => Math.floor(Math.random() * (max - min) + min)
  }

  static boolean() {
    return () => (Math.random() > 0.5) ? true : false 
  }

  static array(qty = 6, type = Dummy.string()) {
    return () => Array(qty + 1).join('.').split('').map(x => type())
  }

  static date() {
    return () => new Date(Math.random() * Date.now()).toISOString()
  }

  for(n = 10) {
    const r = []

    const unwrapSchema = (schema) => {
      const o = schema.o
      let copy = {}
      for (const p in o) {
        if (o.hasOwnProperty(p)) {
          if (!(o[p] instanceof schema.constructor)) {
            copy[p] = o[p]() 
          } else {
            copy[p] = unwrapSchema(o[p])
          }
        }
      }
      return copy
    }

    
    for (let i = 0; i < n; i++)
      r.push(unwrapSchema(this))
    return r
  }
}

module.exports = Dummy