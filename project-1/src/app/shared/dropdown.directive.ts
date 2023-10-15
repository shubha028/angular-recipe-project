
import { Directive, Input, HostBinding, OnChanges, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowDropdown]'
})
export class ShowDropdownDirective  {
 @HostBinding('class.open') isopen=false;
  @HostListener('click') toggleOpen(){
this.isopen=!this.isopen;
  }

}