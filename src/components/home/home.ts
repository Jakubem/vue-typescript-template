import { Component, Vue } from 'vue-property-decorator'

import './home.scss'

@Component({
  template: require('./home.html'),
  components: {}
})
export class HomeComponent extends Vue {

  package: string = 'vue-ts-kie'
  repo: string = 'https://github.com/Jakubem/vue-typescript-template'
  mode: string = process.env.ENV
}
