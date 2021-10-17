import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
@Component({
  selector: 'app-input-msg',
  templateUrl: './input-msg.component.html',
  styleUrls: ['./input-msg.component.scss'],
})
export class InputMsgComponent implements OnInit {
  msgForm: FormGroup;
  @Input() path: string = '';

  constructor(private form: FormBuilder, private chat: ChatService) {}

  ngOnInit() {
    this.msgForm = this.form.group({
      msg: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(21),
        ],
      ],
    });
  }

  onSubmit() {
    const { msg } = this.msgForm.value;
    this.chat.send(msg, this.path);
    this.msgForm.reset();
  }
}
