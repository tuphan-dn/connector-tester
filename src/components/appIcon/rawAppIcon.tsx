import { MouseEvent, ReactNode } from 'react'
import { useRegisterSelector } from '@sentre/senhub'

import { Space, Avatar, Typography, AvatarProps } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

export type AppAvatarProps = {
  appId: string
  avatarProps: AvatarProps
}

export const AppAvatar = ({ avatarProps }: AppAvatarProps) => {
  return (
    <Avatar {...avatarProps}>
      <IonIcon name="image-outline" />
    </Avatar>
  )
}

export type RawAppIconProps = {
  appId: string
  size?: number
  onClick?: (e: MouseEvent<HTMLElement>) => void
  name?: boolean
  direction?: 'vertical' | 'horizontal'
  children?: ReactNode
  src: ReactNode
}

export const RawVerticalAppIcon = ({
  src,
  appId,
  onClick = () => {},
  size = 64,
  name = true,
}: RawAppIconProps) => {
  const { name: appName } = useRegisterSelector(
    (register) => register[appId],
  ) || { name: 'Unknown' }

  return (
    <Space
      direction="vertical"
      style={{ width: size, textAlign: 'center', lineHeight: 1.25 }}
      onClick={onClick}
    >
      <AppAvatar
        appId={appId}
        avatarProps={{
          src,
          shape: 'square',
          size,
          style: { cursor: 'pointer' },
        }}
      />
      {name ? (
        <Typography.Text
          style={{
            fontSize: Math.floor(size / 4.5),
          }}
        >
          {appName}
        </Typography.Text>
      ) : null}
    </Space>
  )
}

export const RawHorizontalAppIcon = ({
  src,
  appId,
  onClick = () => {},
  size = 32,
  name = true,
}: RawAppIconProps) => {
  const { name: appName } = useRegisterSelector(
    (register) => register[appId],
  ) || { name: 'Unknown' }

  return (
    <Space
      style={{
        cursor: 'pointer',
        lineHeight: 1,
      }}
      onClick={onClick}
    >
      <AppAvatar
        appId={appId}
        avatarProps={{
          src,
          shape: 'square',
          size,
          style: { cursor: 'pointer' },
        }}
      />
      {name ? <Typography.Text>{appName}</Typography.Text> : null}
    </Space>
  )
}

const RawAppIcon = ({ direction = 'vertical', ...rest }: RawAppIconProps) => {
  if (direction === 'vertical') return <RawVerticalAppIcon {...rest} />
  return <RawHorizontalAppIcon {...rest} />
}

export default RawAppIcon
