import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { motion } from 'motion/react';
import { Clock, Star, Shield } from 'lucide-react';
import React from 'react';

export const BookingSection: React.FC = () => {
  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-emerald-950 to-slate-900 relative overflow-hidden">
      {/* Gucci Horsebit Hardware Pattern */}
      <div className="absolute inset-0 opacity-8">
        {/* Horsebit inspired hardware elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='horsebit-grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.6'/%3E%3Cstop offset='50%25' style='stop-color:%23B8860B;stop-opacity:0.4'/%3E%3Cstop offset='100%25' style='stop-color:%23DAA520;stop-opacity:0.6'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(45,45)'%3E%3Cellipse cx='0' cy='0' rx='25' ry='15' fill='none' stroke='url(%23horsebit-grad)' stroke-width='2' opacity='0.5'/%3E%3Cellipse cx='0' cy='0' rx='18' ry='10' fill='none' stroke='%23B8860B' stroke-width='1.5' opacity='0.4'/%3E%3Crect x='-20' y='-3' width='40' height='6' rx='3' fill='url(%23horsebit-grad)' opacity='0.3'/%3E%3Ccircle cx='-18' cy='0' r='4' fill='%23DAA520' opacity='0.4'/%3E%3Ccircle cx='18' cy='0' r='4' fill='%23DAA520' opacity='0.4'/%3E%3C/g%3E%3Cg transform='translate(135,135)'%3E%3Cellipse cx='0' cy='0' rx='22' ry='13' fill='none' stroke='url(%23horsebit-grad)' stroke-width='2' opacity='0.4'/%3E%3Cellipse cx='0' cy='0' rx='16' ry='9' fill='none' stroke='%23DAA520' stroke-width='1.5' opacity='0.35'/%3E%3Crect x='-18' y='-2.5' width='36' height='5' rx='2.5' fill='url(%23horsebit-grad)' opacity='0.25'/%3E%3Ccircle cx='-16' cy='0' r='3.5' fill='%23B8860B' opacity='0.35'/%3E%3Ccircle cx='16' cy='0' r='3.5' fill='%23B8860B' opacity='0.35'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
          backgroundRepeat: 'repeat'
        }}></div>
        {/* Chain link pattern with JD elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='chain-grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.5'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.2'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg transform='translate(30,30)'%3E%3Cellipse cx='0' cy='0' rx='12' ry='8' fill='none' stroke='url(%23chain-grad)' stroke-width='1.5' transform='rotate(45)'/%3E%3Ctext x='-5' y='3' font-family='Bodoni Moda,serif' font-size='12' font-weight='600' fill='%23B8860B' opacity='0.6'%3EJD%3C/text%3E%3C/g%3E%3Cg transform='translate(90,90)'%3E%3Cellipse cx='0' cy='0' rx='10' ry='7' fill='none' stroke='url(%23chain-grad)' stroke-width='1.5' transform='rotate(-45)'/%3E%3Ctext x='-4' y='3' font-family='Bodoni Moda,serif' font-size='10' font-weight='600' fill='%23DAA520' opacity='0.5'%3EJD%3C/text%3E%3C/g%3E%3Cpath d='M30,15 Q45,0 60,15 Q75,30 60,45 Q45,60 30,45 Q15,30 30,15' fill='none' stroke='%23DAA520' stroke-width='1' opacity='0.3'/%3E%3Cpath d='M90,75 Q105,60 120,75 Q135,90 120,105 Q105,120 90,105 Q75,90 90,75' fill='none' stroke='%23B8860B' stroke-width='1' opacity='0.25'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 flex items-center">
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-br from-emerald-400 to-amber-400 rotate-45"></div>
                  <div className="relative px-6 py-3 bg-gradient-to-r from-emerald-900/30 to-amber-900/30 border border-emerald-400/30 backdrop-blur-sm">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-emerald-400 to-amber-400"></div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-amber-400 to-emerald-400"></div>
                    <div className="relative text-emerald-200 tracking-[0.4em] uppercase text-sm" style={{fontFamily: 'Inter, sans-serif', fontWeight: '600'}}>
                      Book Now
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-gradient-to-br from-amber-400 to-emerald-400 rotate-45"></div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-4xl text-transparent bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text leading-tight tracking-wide uppercase" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '900'}}>
                Schedule Your Appointment
              </div>
              <div className="text-xs tracking-[0.3em] text-emerald-300/60 mt-2 uppercase" style={{fontFamily: 'Inter, sans-serif', fontWeight: '500'}}>
                Your Journey Begins Here
              </div>
            </div>
            <p className="text-emerald-100 text-lg mb-8" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
              Ready to experience our premium beauty treatments? Book your appointment today and let our experts take care of you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-emerald-100">
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>Flexible scheduling available</span>
              </div>
              <div className="flex items-center gap-4 text-emerald-100">
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>Safe & professional treatments</span>
              </div>
              <div className="flex items-center gap-4 text-emerald-100">
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>Premium quality service</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-emerald-900/50 to-slate-800/50 border-emerald-400/20 backdrop-blur-sm">
              <CardHeader>
                <div className="text-2xl text-emerald-100 tracking-wide uppercase" style={{fontFamily: 'Inter, sans-serif', fontWeight: '700'}}>Book Your Treatment</div>
                <div className="text-emerald-300 tracking-wide mt-2" style={{fontFamily: 'Inter, sans-serif', fontWeight: '400'}}>
                  Fill out the form below and we'll contact you to confirm your appointment
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-emerald-100">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="bg-emerald-900/30 border-emerald-400/30 text-emerald-100 placeholder:text-emerald-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-emerald-100">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="bg-emerald-900/30 border-emerald-400/30 text-emerald-100 placeholder:text-emerald-300"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-emerald-100">Phone Number</Label>
                  <Input 
                    id="phone" 
                    placeholder="Your phone number"
                    className="bg-emerald-900/30 border-emerald-400/30 text-emerald-100 placeholder:text-emerald-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-emerald-100">Preferred Treatment</Label>
                  <Select>
                    <SelectTrigger className="bg-emerald-900/30 border-emerald-400/30 text-emerald-100">
                      <SelectValue placeholder="Select a treatment" />
                    </SelectTrigger>
                    <SelectContent className="bg-emerald-900 border-emerald-400/30">
                      <SelectItem value="laser-hair" className="text-emerald-100">Laser Hair Removal</SelectItem>
                      <SelectItem value="rf-skin" className="text-emerald-100">RF Skin Tightening</SelectItem>
                      <SelectItem value="tattoo-removal" className="text-emerald-100">Tattoo Removal</SelectItem>
                      <SelectItem value="nail-care" className="text-emerald-100">Nail Care & Beauty</SelectItem>
                      <SelectItem value="pigmentation" className="text-emerald-100">Pigmentation Treatment</SelectItem>
                      <SelectItem value="skin-rejuvenation" className="text-emerald-100">Skin Rejuvenation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-emerald-100">Additional Notes</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Any specific requirements or questions..."
                    className="bg-emerald-900/30 border-emerald-400/30 text-emerald-100 placeholder:text-emerald-300 min-h-[100px]"
                  />
                </div>

                <Button className="relative w-full bg-gradient-to-br from-amber-900 via-emerald-900 via-50% to-amber-900 hover:from-amber-800 hover:via-emerald-800 hover:to-amber-800 text-amber-100 border border-amber-600/30 py-6 text-lg font-weight-medium shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='sched-grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' style='stop-color:%23DAA520;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%23B8860B;stop-opacity:0.5'/%3E%3C/radialGradient%3E%3C/defs%3E%3Cg transform='translate(8,8)'%3E%3Crect x='0' y='0' width='18' height='18' rx='3' fill='url(%23sched-grad)' opacity='0.35'/%3E%3Ctext x='4' y='14' font-family='Cormorant Garamond,serif' font-size='12' font-weight='700' fill='%23DAA520' opacity='1'%3EJD%3C/text%3E%3Cpath d='M-2 9L20 9M9 -2L9 20' stroke='%23DAA520' stroke-width='1' opacity='0.4'/%3E%3C/g%3E%3Cg transform='translate(34,34)'%3E%3Crect x='0' y='0' width='18' height='18' rx='3' fill='url(%23sched-grad)' opacity='0.3'/%3E%3Ctext x='4' y='14' font-family='Cormorant Garamond,serif' font-size='12' font-weight='700' fill='%23B8860B' opacity='1'%3EJD%3C/text%3E%3Cpath d='M-2 9L20 9M9 -2L9 20' stroke='%23B8860B' stroke-width='1' opacity='0.35'/%3E%3C/g%3E%3Cpath d='M15 15L45 45M45 15L15 45' stroke='%23DAA520' stroke-width='0.8' opacity='0.2'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px',
                    backgroundRepeat: 'repeat'
                  }}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-700/20 via-emerald-700/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(218,165,32,0.1),rgba(16,185,129,0.1),transparent_80%)]"></div>
                  <span className="relative z-10 tracking-wide uppercase" style={{fontFamily: 'Poppins, sans-serif', fontWeight: '700'}}>Schedule Appointment</span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
