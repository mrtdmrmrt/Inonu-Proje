import axios from "axios"
export const dataMixin = {
    data (){
        return{
            id:1,
            Announcements : []
        }
    },
    methods : {
        getAnnouncementsPage(){
            return axios.get("http://test.inonu.edu.tr/ws/announcement/list?page="+this.id);
            //return axios.get("http://test.inonu.edu.tr/ws/announcement/list?page=1&term=chunk");
        }
    },
    computed:{
        vuexId(){
            console.log(this.id)
            return this.id = this.$store.getters.getId
            
        }
    },
    created(){
        this.getAnnouncementsPage()
              .then(response => {
          
          this.Announcements = response.data;
          console.log(this.Announcements)
        })
    },
    updated() {
        if(this.id){
            this.getAnnouncementsPage()
              .then(response => {
                this.Announcements = response.data;
            })
        }
    }
}