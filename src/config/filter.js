
import moment from 'moment'

const filters = {
	/*日期格式化过滤器*/
	timeFormat:{
		timeFormat(time){
			return  momnet(date).format('YYYY-MM-DD')
		}
	}
	
}

export default filters