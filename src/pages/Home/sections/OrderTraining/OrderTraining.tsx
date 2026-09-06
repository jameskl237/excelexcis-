import { Section } from '../../../../components/Section/Section'
import { OrderForm } from '../../../../components/OrderForm/OrderForm'

export function OrderTraining() {
  return (
    <Section
      id="order-training"
      title="Commander une formation"
      subtitle="Organisez une formation sur mesure pour votre équipe"
      variant="alt"
    >
      <OrderForm mode="order" />
    </Section>
  )
}
