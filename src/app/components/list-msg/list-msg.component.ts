import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { msg } from '../../models/msg.model';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-list-msg',
  templateUrl: './list-msg.component.html',
  styleUrls: ['./list-msg.component.scss'],
})
export class ListMsgComponent implements OnInit {
  listMsg: msg[];
  @Input() path: string = '';
  @ViewChild('container') private myScrollContainer: ElementRef;
  constructor(public chat: ChatService) {}

  ngOnInit() {
    this.chat
      .getMsg(this.path)
      .valueChanges()
      .subscribe((data) => {
        data = data.map((d) => {
          return { ...d, date: d.date.toDate() };
        });

        this.listMsg = data.sort((a, b) => {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          return 0;
        });
        setTimeout(() => {
          this.scrollToBottom();
        }, 200);
      });

    this.chat.pushListener.subscribe(() => {
      this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    try {
      console.log(
        this.myScrollContainer,
        this.myScrollContainer.nativeElement.scrollHeight
      );
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }
}
