enum WarningStyle {
  DialogBox,
  StatusMessage,
  LogOnly,
}

interface IWarningOptions {
  /**
   * Determines how the warning will be displayed.
   *
   * @remarks
   * See {@link WarningStyle| the WarningStyle enum} for more details.
   *
   * @defaultValue `WarningStyle.DialogBox`
   */
  warningStyle: WarningStyle;

  /**
   * Whether the warning can interrupt a user's current activity.
   * @defaultValue
   * The default is `true` unless
   *  `WarningStyle.StatusMessage` was requested.
   */
  cancellable?: boolean;

  /**
   * The warning message
   */
  message: string;
}
