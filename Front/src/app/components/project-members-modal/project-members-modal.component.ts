import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
// Models
import { Member } from 'src/app/models/member.model';
// Services
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'project-members-modal',
  templateUrl: './project-members-modal.component.html',
  styleUrls: ['./project-members-modal.component.css']
})
export class ProjectMembersModalComponent implements OnInit, OnDestroy {
  @Output() projcetMemberEmitter: EventEmitter<string> = new EventEmitter();


  members: Member[] = [];
  userMember: Member = null;

  // Subscriptions
  membersSub: Subscription;
  userMemberSub: Subscription;

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.membersSub = this.memberService.members$.subscribe(projectMembers => {
      this.members = projectMembers;
      console.log('Members:', this.members);
    })
    this.userMemberSub = this.memberService.userMember$.subscribe(member => { this.userMember = member });
  }

  ngOnDestroy(): void {
    this.membersSub.unsubscribe();
    this.userMemberSub.unsubscribe();
  }

  onRemove(memberID: Member['_id']) {
    this.projcetMemberEmitter.emit(memberID);
  }
}
