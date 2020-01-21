<template>
    <div class="container">
      <div class="ex1">
        <ul v-for="(Announcements, index) in Announcements" :key="index" style="list-style-type:none;" >
            
            <li v-for="(Announcement, index) in Announcements.translateAnnouncement" :key="index" class="list-group">
                {{ Announcement.title }}
            </li>
        </ul>
      </div>
      <router-link class='btn btn-primary'
      to="/announcements"
      tag="a">Announcements</router-link>
     
    </div>
</template>
<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data () {
      return {
        
      }
    },
    methods :{
      
    }
    
}
</script>
<style croped>
  div.ex1 {
    margin-top: 20px;
    height: 300px;
    width: 200px;
    overflow: scroll;
}
.btn{
  margin-top:10px;
}

</style>