import Vue from "vue"
import VueRouter from "vue-router"

import HomePage from "./pages/HomePage"
import Announcements from "./pages/Announcements"
import AnnouncementDetail from "./components/AnnouncementDetail"


Vue.use(VueRouter)
export const router = new VueRouter({
	routes : [
	{
		path : "/" ,
		name : "/", 
		component : HomePage , 
	
	},
	{
		path : "/announcements" ,
		name : "announcements", 
		component : Announcements , 
	
	},
	{
		path : "/:AnnouncementDetailId/announcementdetail" ,
		name : "AnnouncementDetail", 
		component : AnnouncementDetail , 
	
	}

	],
	mode : "history"
})