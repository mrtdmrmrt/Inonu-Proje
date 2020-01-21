<template>
    <div class="container">
        
        <ul style="list-style-type:none;" v-for="(Announcements, index) in filteredArray({AnnouncementDetailId:AnnouncementDetailId})" :key="index">
             <p>{{ Announcements.created }}</p>
            <li v-for="(Announcement, index) in Announcements.translateAnnouncement" :key="index" class="list-group">
                <p>{{ Announcement.description }}</p>
                <p>{{ Announcement.title }}</p>
                <p v-html="Announcement.text">{{ Announcement.text }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data(){
        return{
            
            
            AnnouncementDetailId : parseInt(this.$route.params.AnnouncementDetailId),
        }
    },
    methods:{
        filteredArray(filter)
        {
          var filteredArray = this.Announcements.filter(function(obj,ind)
          {
              return obj.id === filter.AnnouncementDetailId;
          });
          return filteredArray.length > 0 ? filteredArray : [];
          
        }
    }
    
   
}
</script>