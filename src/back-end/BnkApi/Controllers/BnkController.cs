using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BnkApi.Models;
using BnkApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;


namespace BnkApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BnkController : ControllerBase
    {
        private readonly MemberService _memberService;

        public BnkController(MemberService memberService)
        {
            _memberService = memberService;
        }
        [HttpGet("members")]
        public IActionResult Members()
        {
            var members = _memberService.GetAll();
            return Ok(members);
        }

        [HttpGet("members/{id}")]
        public IActionResult Member(int id)
        {
            var member = _memberService.GetById(id);
            return Ok(member);
        }
        [HttpPatch("members/{id}")]
        public IActionResult Update(int id, [FromBody]Member member)
        {
            _memberService.UpdateById(id, member);
            var members = _memberService.GetAll();
            return Ok(members);
        }
    }
}