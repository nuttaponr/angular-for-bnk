using BnkApi.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BnkApi.Services
{
    public class MemberService
    {

        public List<Member> GetAll()
        {
            var db = System.IO.File.ReadAllText("members.json");
            var members = JsonConvert.DeserializeObject<List<Member>>(db);
            return members;
        }

        public Member GetById(int id)
        {
            return GetAll().FirstOrDefault(m => m._id == id);
        }

        public void UpdateById(int id, Member member)
        {
            var members = GetAll();
            var db = members.FirstOrDefault(m => m._id == id);
            db.ImgUrl = member.ImgUrl;
            db.Name = member.Name;
            db.InstagramId = member.InstagramId;

            var json = JsonConvert.SerializeObject(members, Formatting.Indented);
            System.IO.File.WriteAllText("members.json", json);

        }
    }
}
