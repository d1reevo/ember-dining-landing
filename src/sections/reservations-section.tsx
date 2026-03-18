import { useState, type FormEvent } from 'react'
import { reservationDetails } from '../data/site-content'
import { MagneticButton } from '../components/ui/action'

export function ReservationsSection() {
  const [reservationFeedback, setReservationFeedback] = useState('')

  const handleReservationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const reservationForm = event.currentTarget
    const formData = new FormData(reservationForm)
    const guestName = formData.get('name')?.toString().trim()
    const guestCount = formData.get('guests')?.toString()
    const reservationDate = formData.get('date')?.toString()
    const reservationTime = formData.get('time')?.toString()

    setReservationFeedback(
      `${guestName ? `${guestName}, ` : ''}your ${guestCount ?? 'evening'}-guest request for ${
        reservationDate || 'your preferred date'
      } at ${reservationTime || 'your preferred time'} is with our concierge.`,
    )

    reservationForm.reset()
  }

  return (
    <section id="reservations" className="scroll-mt-32 py-24 sm:py-32">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-ember/15 bg-[linear-gradient(180deg,rgba(22,22,22,0.98)_0%,rgba(13,13,13,0.95)_100%)] px-5 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-ember/18 blur-3xl" />
          <div className="absolute left-8 top-12 h-40 w-40 rounded-full bg-gold/12 blur-3xl" />

          <div className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow" data-reveal>
                Reservations
              </p>
              <h2
                data-section-heading
                className="mt-5 font-heading text-4xl uppercase leading-[1.04] tracking-[0.12em] text-cream sm:text-5xl"
              >
                Reserve Your Evening
              </h2>
              <p data-reveal className="mt-5 text-base leading-8 text-cream/66">
                Reserve the dining room, the chef&apos;s counter, or a lingering table for two. Our
                concierge confirms every booking personally.
              </p>
            </div>

            <form
              data-reveal
              onSubmit={handleReservationSubmit}
              className="surface-panel mx-auto mt-12 max-w-5xl rounded-[2.25rem] p-5 sm:p-8"
            >
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <label className="space-y-2">
                  <span className="font-label text-[0.58rem] uppercase tracking-[0.28em] text-cream/45">
                    Name
                  </span>
                  <input
                    required
                    type="text"
                    name="name"
                    className="field-input"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2">
                  <span className="font-label text-[0.58rem] uppercase tracking-[0.28em] text-cream/45">
                    Date
                  </span>
                  <input required type="date" name="date" className="field-input" />
                </label>
                <label className="space-y-2">
                  <span className="font-label text-[0.58rem] uppercase tracking-[0.28em] text-cream/45">
                    Time
                  </span>
                  <input required type="time" name="time" className="field-input" />
                </label>
                <label className="space-y-2">
                  <span className="font-label text-[0.58rem] uppercase tracking-[0.28em] text-cream/45">
                    Guests
                  </span>
                  <select required name="guests" className="field-input">
                    <option value="2">2 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="8">8 Guests</option>
                    <option value="10">10 Guests</option>
                  </select>
                </label>
              </div>

              <label className="mt-4 block space-y-2">
                <span className="font-label text-[0.58rem] uppercase tracking-[0.28em] text-cream/45">
                  Special Requests
                </span>
                <textarea
                  name="requests"
                  rows={5}
                  className="field-input resize-none"
                  placeholder="Dietary notes, celebration details, preferred seating..."
                />
              </label>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-7 text-cream/58">
                  Reservations close daily at 16:00 for same-night service.
                </p>
                <MagneticButton type="submit" variant="gradient">
                  Book a Table
                </MagneticButton>
              </div>

              {reservationFeedback ? (
                <p className="mt-5 text-sm leading-7 text-gold">{reservationFeedback}</p>
              ) : null}
            </form>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {reservationDetails.map((detail) => (
                <div key={detail.label} data-reveal className="surface-panel rounded-[2rem] p-6">
                  <p className="eyebrow">{detail.label}</p>
                  <p className="mt-4 whitespace-pre-line text-base leading-8 text-cream/72">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
