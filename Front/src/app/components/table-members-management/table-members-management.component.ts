import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
// Services
import { MemberService } from 'src/app/services/member.service';
import { ProjectService } from 'src/app/services/project.service';
// Models
import { Member } from 'src/app/models/member.model';

@Component({
  selector: 'app-table-members-management',
  templateUrl: './table-members-management.component.html',
  styleUrls: ['./table-members-management.component.css']
})
export class TableMembersManagementComponent implements OnInit, OnDestroy {
  project = null;

  projectMembers: Member[] = [];

  // Subscriptions
  projectMembersSub: Subscription;
  projerctSub: Subscription;

  constructor(private memberService: MemberService, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projerctSub = this.projectService.currentProject$.subscribe(
      project => {
        if (project) {
          this.project = project;
          this.memberService.loadProjectMembers(project._id);
        }
      });

    // Members listener
    this.projectMembersSub = this.memberService.members$.subscribe(members => { this.projectMembers = members });
  }

  ngOnDestroy(): void {
    this.projectMembersSub.unsubscribe();
    this.projerctSub.unsubscribe();
  }

}
