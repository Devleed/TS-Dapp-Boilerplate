import { darken, styled } from '@mui/material/styles'

export default styled('button')<{
  height?: number | string
  width?: number | string
  bgColor?: string
}>(({ theme, height, width, bgColor }) => ({
  height: height || 'auto',
  width: width || 'auto',
  backgroundColor: bgColor || darken(theme.palette.background.default, 0.5),
  color: theme.palette.text.primary,
  outline: 'none',
  border: 0,
  borderRadius: 5,
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}))
