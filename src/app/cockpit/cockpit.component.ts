import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluePrintCreated= new EventEmitter<{serverName: string, serverContent: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(serverInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      serverName: serverInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }

}
