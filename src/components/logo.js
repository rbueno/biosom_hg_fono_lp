/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Image, Box } from 'theme-ui';

export default function Logo({ isSticky, footer, ...props }) {
  const hearingguardian = 'https://biosom.com.br/fonolp/_next/static/images/hearing-guardian-logo-4375791a7274f23e95c8f0b8a6e7b435.png'
  return (
    <Box as="figure" sx={{ display: 'flex', height: '50px', width: '50px' }}>
                  <Image src={hearingguardian} alt="hearingguardian" />
    </Box>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
