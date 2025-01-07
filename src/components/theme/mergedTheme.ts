/*
 * We recommend using the merged theme if you want to override our core theme.
 * This means you can use our core theme and override it with your own customizations.
 * Write your overrides in the userTheme object in this file.
 * The userTheme object is merged with the coreTheme object within this file.
 * Export this file and import it in the `@components/theme/index.tsx` file to use the merged theme.
 */

// MUI Imports
import { deepmerge } from '@mui/utils'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'

// Core Theme Imports
import coreTheme from '@core/theme'

const mergedTheme = (settings: Settings, mode: SystemMode, direction: Theme['direction']) => {
  // Vars
  const userTheme = {
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#7367F0',
            light: '#8F85F3',
            dark: '#675DD8',
            lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
          },
          secondary: {
            main: '#808390',
            light: '#999CA6',
            dark: '#737682',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
          },
          error: {
            main: '#FF4C51',
            light: '#FF7074',
            dark: '#E64449',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
          },
          warning: {
            main: '#FF9F43',
            light: '#FFB269',
            dark: '#E68F3C',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
          },
          info: {
            main: '#00BAD1',
            light: '#33C8DA',
            dark: '#00A7BC',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
          },
          success: {
            main: '#28C76F',
            light: '#53D28C',
            dark: '#24B364',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
          },
          text: {
            primary: `rgb(var(--mui-mainColorChannels-light) / 0.9)`,
            secondary: `rgb(var(--mui-mainColorChannels-light) / 0.7)`,
            disabled: `rgb(var(--mui-mainColorChannels-light) / 0.4)`,
            primaryChannel: 'var(--mui-mainColorChannels-light)',
            secondaryChannel: 'var(--mui-mainColorChannels-light)'
          },
          divider: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
          dividerChannel: 'var(--mui-mainColorChannels-light)',
          background: {
            default: '#F8F7FA',
            paper: '#FFFFFF',
            paperChannel: '255 255 255'
          },
          action: {
            active: `rgb(var(--mui-mainColorChannels-light) / 0.6)`,
            hover: `rgb(var(--mui-mainColorChannels-light) / 0.06)`,
            selected: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,
            disabled: `rgb(var(--mui-mainColorChannels-light) / 0.3)`,
            disabledBackground: `rgb(var(--mui-mainColorChannels-light) / 0.16)`,
            focus: `rgb(var(--mui-mainColorChannels-light) / 0.1)`,
            focusOpacity: 0.1,
            activeChannel: 'var(--mui-mainColorChannels-light)',
            selectedChannel: 'var(--mui-mainColorChannels-light)'
          },
          Alert: {
            errorColor: 'var(--mui-palette-error-main)',
            warningColor: 'var(--mui-palette-warning-main)',
            infoColor: 'var(--mui-palette-info-main)',
            successColor: 'var(--mui-palette-success-main)',
            errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
            warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
            infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
            successStandardBg: 'var(--mui-palette-success-lightOpacity)',
            errorFilledColor: 'var(--mui-palette-error-contrastText)',
            warningFilledColor: 'var(--mui-palette-warning-contrastText)',
            infoFilledColor: 'var(--mui-palette-info-contrastText)',
            successFilledColor: 'var(--mui-palette-success-contrastText)',
            errorFilledBg: 'var(--mui-palette-error-main)',
            warningFilledBg: 'var(--mui-palette-warning-main)',
            infoFilledBg: 'var(--mui-palette-info-main)',
            successFilledBg: 'var(--mui-palette-success-main)'
          },
          Avatar: {
            defaultBg: '#EEEDF0'
          },
          Chip: {
            defaultBorder: 'var(--mui-palette-divider)'
          },
          FilledInput: {
            bg: 'var(--mui-palette-action-hover)',
            hoverBg: 'var(--mui-palette-action-selected)',
            disabledBg: 'var(--mui-palette-action-hover)'
          },
          SnackbarContent: {
            bg: '#2F2B3D',
            color: 'var(--mui-palette-background-paper)'
          },
          Switch: {
            defaultColor: 'var(--mui-palette-common-white)',
            defaultDisabledColor: 'var(--mui-palette-common-white)',
            primaryDisabledColor: 'var(--mui-palette-common-white)',
            secondaryDisabledColor: 'var(--mui-palette-common-white)',
            errorDisabledColor: 'var(--mui-palette-common-white)',
            warningDisabledColor: 'var(--mui-palette-common-white)',
            infoDisabledColor: 'var(--mui-palette-common-white)',
            successDisabledColor: 'var(--mui-palette-common-white)'
          },
          Tooltip: {
            bg: '#2F2B3D'
          },
          TableCell: {
            border: 'var(--mui-palette-divider)'
          },
          customColors: {
            bodyBg: '#F8F7FA',
            chatBg: '#F3F2F5',
            greyLightBg: '#FAFAFA',
            inputBorder: `rgb(var(--mui-mainColorChannels-light) / 0.22)`,
            tableHeaderBg: '#FFFFFF',
            tooltipText: '#FFFFFF',
            trackBg: '#F1F0F2'
          }
        }
      },
      dark: {
        palette: {
          primary: {
            main: '#283046',
            light: '#f5f5f5',
            dark: '#283046',
            lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
          },
          secondary: {
            main: '#808390',
            light: '#999CA6',
            dark: '#737682',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
          },
          error: {
            main: '#FF4C51',
            light: '#FF7074',
            dark: '#E64449',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
          },
          warning: {
            main: '#FF9F43',
            light: '#FFB269',
            dark: '#E68F3C',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
          },
          info: {
            main: '#00BAD1',
            light: '#33C8DA',
            dark: '#00A7BC',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
          },
          success: {
            main: '#28C76F',
            light: '#53D28C',
            dark: '#24B364',
            contrastText: '#FFF',
            lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
          },
          text: {
            primary: `rgb(var(--mui-mainColorChannels-dark) / 0.9)`,
            secondary: `rgb(var(--mui-mainColorChannels-dark) / 0.7)`,
            disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.4)`,
            primaryChannel: 'var(--mui-mainColorChannels-dark)',
            secondaryChannel: 'var(--mui-mainColorChannels-dark)'
          },
          divider: `rgb(var(--mui-mainColorChannels-dark) / 0.12)`,
          dividerChannel: 'var(--mui-mainColorChannels-dark)',
          background: {
            default: '#25293C',
            paper: '#2F3349',
            paperChannel: '47 51 73'
          },
          action: {
            active: `rgb(var(--mui-mainColorChannels-dark) / 0.6)`,
            hover: `rgb(var(--mui-mainColorChannels-dark) / 0.06)`,
            selected: `rgb(var(--mui-mainColorChannels-dark) / 0.08)`,
            disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.3)`,
            disabledBackground: `rgb(var(--mui-mainColorChannels-dark) / 0.16)`,
            focus: `rgb(var(--mui-mainColorChannels-dark) / 0.1)`,
            focusOpacity: 0.1,
            activeChannel: 'var(--mui-mainColorChannels-dark)',
            selectedChannel: 'var(--mui-mainColorChannels-dark)'
          },
          Alert: {
            errorColor: 'var(--mui-palette-error-main)',
            warningColor: 'var(--mui-palette-warning-main)',
            infoColor: 'var(--mui-palette-info-main)',
            successColor: 'var(--mui-palette-success-main)',
            errorStandardBg: 'var(--mui-palette-error-lightOpacity)',
            warningStandardBg: 'var(--mui-palette-warning-lightOpacity)',
            infoStandardBg: 'var(--mui-palette-info-lightOpacity)',
            successStandardBg: 'var(--mui-palette-success-lightOpacity)',
            errorFilledColor: 'var(--mui-palette-error-contrastText)',
            warningFilledColor: 'var(--mui-palette-warning-contrastText)',
            infoFilledColor: 'var(--mui-palette-info-contrastText)',
            successFilledColor: 'var(--mui-palette-success-contrastText)',
            errorFilledBg: 'var(--mui-palette-error-main)',
            warningFilledBg: 'var(--mui-palette-warning-main)',
            infoFilledBg: 'var(--mui-palette-info-main)',
            successFilledBg: 'var(--mui-palette-success-main)'
          },
          Avatar: {
            defaultBg: '#373B50'
          },
          Chip: {
            defaultBorder: 'var(--mui-palette-divider)'
          },
          FilledInput: {
            bg: 'var(--mui-palette-action-hover)',
            hoverBg: 'var(--mui-palette-action-selected)',
            disabledBg: `var(--mui-palette-action-hover)`
          },
          SnackbarContent: {
            bg: '#F7F4FF',
            color: 'var(--mui-palette-background-paper)'
          },
          Switch: {
            defaultColor: 'var(--mui-palette-common-white)',
            defaultDisabledColor: 'var(--mui-palette-common-white)',
            primaryDisabledColor: 'var(--mui-palette-common-white)',
            secondaryDisabledColor: 'var(--mui-palette-common-white)',
            errorDisabledColor: 'var(--mui-palette-common-white)',
            warningDisabledColor: 'var(--mui-palette-common-white)',
            infoDisabledColor: 'var(--mui-palette-common-white)',
            successDisabledColor: 'var(--mui-palette-common-white)'
          },
          Tooltip: {
            bg: '#F7F4FF'
          },
          TableCell: {
            border: 'var(--mui-palette-divider)'
          },
          customColors: {
            bodyBg: '#25293C',
            chatBg: '#202534',
            greyLightBg: '#353A52',
            inputBorder: `rgb(var(--mui-mainColorChannels-dark) / 0.22)`,
            tableHeaderBg: '#2F3349',
            tooltipText: '#2F3349',
            trackBg: '#3A3F57'
          }
        }
      }
    },
  } as Theme

  return deepmerge(coreTheme(settings, mode, direction), userTheme)
}

export default mergedTheme
