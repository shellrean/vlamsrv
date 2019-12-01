import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
	faUserSecret,
	faStrikethrough,
	faBold,
	faImage,
	faItalic,
	faUnderline,
	faParagraph,
	faList,
	faListOl,
	faQuoteRight,
	faUndo,
	faRedo,
	faTachometerAlt,
	faBookOpen,
	faBriefcase,
	faClipboardList,
	faFolder,
	faTrash,
	faStar,
	faEdit,
	faSignOutAlt,
	faUserLock,
	faLock,
	faUser,
	faEnvelope,
	faSync,
	faServer,
	faInfoCircle,
	faUsers
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add({
	faUserSecret,
	faStrikethrough,
	faBold,
	faImage,
	faItalic,
	faUnderline,
	faParagraph,
	faList,
	faListOl,
	faQuoteRight,
	faUndo,
	faRedo,
	faTachometerAlt,
	faBookOpen,
	faBriefcase,
	faClipboardList,
	faFolder,
	faTrash,
	faStar,
	faEdit,
	faSignOutAlt,
	faUserLock,
	faLock,
	faUser,
	faEnvelope,
	faSync,
	faServer,
	faInfoCircle,
	faUsers
})

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default {
	library
}