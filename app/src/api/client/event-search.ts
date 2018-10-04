import axios from 'axios'

export default {
  init: async () => {
    return await axios.get('http://35.225.168.191/api/event-search/init')
  },
}
