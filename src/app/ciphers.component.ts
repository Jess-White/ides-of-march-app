import { CipherService } from '..cipher.service';

ciphers: Cipher[];

getCiphers(): void {
  this.cipherService.getCiphers()
  .subscribe(ciphers => this.ciphers = ciphers);
}

ngOnInit() {
  this.getCiphers().subscribe((ciphers => {
  console.log(ciphers);
  });

}