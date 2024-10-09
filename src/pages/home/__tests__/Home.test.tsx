import { act, screen } from '@testing-library/react'
import { App } from 'App'
import { workito } from 'lib/workito'

it('should render the home page', async () => {
  await act(() => workito(App).mount())

  expect(
    await screen.findByRole('heading', { name: 'Home page' }),
  ).toBeInTheDocument()
})
