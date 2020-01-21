<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <input v-model="searchText" class="form-control" type="text"  placeholder="Lütfen Duyuru Basligi Giriniz.." >
        </div>
        <div class="col-md-6">
            <ul v-for="(Announcements, index) in filtered" :key="index" style="list-style-type:none;" >
              <li v-for="(Announcement, index) in Announcements.translateAnnouncement" :key="index" class="list-group">
                <router-link class="list-group-item " :to="{ name: 'AnnouncementDetail', params: { AnnouncementDetailId: Announcements.id }}">{{Announcement.title}}</router-link>
              </li>
            </ul>
            <div class="row">
              <button @click="prevId" class="btn btn-outline-success">prev</button>
              <button @click="nextId" class="btn btn-outline-success">next</button>
            </div>
        </div>
      </div>
      
    </div>
</template>
<script>
import {dataMixin} from "../dataMixin"
export default {
    mixins : [dataMixin],
    data () {
      return{
        
        searchText : '',
        
      }
    },
   methods :{
      nextId(){
        this.id++;
        
        this.$store.dispatch("addIdActions",this.id)
      },
      prevId(){
        this.id--;
        if(this.id < 1){
          this.id = 1
        }
        this.$store.dispatch("addIdActions",this.id)
      }
   } ,
    computed :{
      filtered(){
        return this.Announcements.filter((element) =>{
          return element.translateAnnouncement.tr.title.match(this.searchText);
        })
      },
     
    }
}
</script>
<style scoped>
.container{
  margin-top: 10px;
}
</style>>