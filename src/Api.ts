/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface OsagoAPICommonModelsAuthLoginRequest {
  login?: string | null
  password?: string | null
}

export interface OsagoAPICommonModelsAuthLoginResponse {
  token?: string | null

  /** @format int32 */
  expiresIn?: number
}

export interface OsagoAPICommonModelsAutoCarEditModel {
  /** @format int32 */
  markId?: number | null

  /** @format int32 */
  modelId?: number | null
  autoMark?: string | null
  autoModel?: string | null

  /** @format int32 */
  modificationId?: number | null

  /** @format int32 */
  yearIssue?: number | null
  withUseTrailer?: boolean

  /** @format double */
  power?: number | null
  licensePlate?: string | null
  vin?: string | null
  bodyNumber?: string | null
  chassisNumber?: string | null
  ticketCarLater?: boolean
  isNotRequiredDK?: boolean
  ticketCar?: string | null
  ticketCarNumber?: string | null

  /** @format date-time */
  ticketDiagnosticDate?: string | null

  /** @format date-time */
  originalDKEndDate?: string | null

  /** @format date-time */
  ticketDiagnosticStartDate?: string | null
  documentCar?: OsagoAPICommonModelsInsuranceDocumentEditModel
  categoryCInfo?: OsagoAPICommonModelsAutoCategoryCInfoEditModel
}

export interface OsagoAPICommonModelsAutoCategoryCInfoEditModel {
  /** @format double */
  maxWeight?: number
  isStandardCargo?: boolean
  isRiskCargo?: boolean
  hasTechnicalInspectionDelay?: boolean
}

/**
 * @format int32
 */
export type OsagoAPICommonModelsCategory = 1 | 2 | 3 | 4

export interface OsagoAPICommonModelsCommonAddressEditModel {
  state?: string | null
  region?: string | null
  city?: string | null
  street?: string | null
  house?: string | null
  building?: string | null
  apartment?: string | null
  zip?: string | null
  fiasId?: string | null
  stateFiasId?: string | null
  cityFiasId?: string | null
  streetFiasId?: string | null
  kladrId?: string | null
  okato?: string | null
  value?: string | null
}

/**
 * @format int32
 */
export type OsagoAPICommonModelsDriverType = 1 | 2 | 3

/**
 * @format int32
 */
export type OsagoAPICommonModelsDrivingCategory =
  | 1
  | 2
  | 3
  | 4
  | 8
  | 9
  | 10
  | 11

export interface OsagoAPICommonModelsInsuranceDocumentEditModel {
  /** @format int32 */
  docTypeId?: number
  number?: string | null
  seria?: string | null

  /** @format date-time */
  docDate?: string | null

  /** @format date-time */
  endDate?: string | null
  countryCode?: string | null
  placeOfIssue?: string | null
  divisionCode?: string | null
}

export interface OsagoAPICommonModelsInsuranceDriverEditModel {
  person?: OsagoAPICommonModelsInsurancePersonEditModel
  driverLicense?: OsagoAPICommonModelsInsuranceDocumentEditModel
  oldDriverLicense?: OsagoAPICommonModelsInsuranceDocumentEditModel

  /** @format date-time */
  firstLicenseDate?: string | null
  oldSurname?: string | null
  type?: OsagoAPICommonModelsDriverType
  driverExperiences?:
    | OsagoAPICommonModelsInsuranceDriverExperienceEditModel[]
    | null
}

export interface OsagoAPICommonModelsInsuranceDriverExperienceEditModel {
  category?: OsagoAPICommonModelsDrivingCategory

  /** @format date-time */
  startDate?: string
}

export interface OsagoAPICommonModelsInsuranceInsuranceCardEditModel {
  /** @format int32 */
  agentId?: number | null

  /** @format uuid */
  insuranceCompanyId?: string | null

  /** @format date-time */
  beginDate?: string

  /** @format int32 */
  insuranceMonth?: number
  prevPolicySerial?: string | null
  prevPolicyNumber?: string | null
  car?: OsagoAPICommonModelsAutoCarEditModel
  insurer?: OsagoAPICommonModelsInsurancePersonEditModel
  owner?: OsagoAPICommonModelsInsurancePersonEditModel
  drivers?: OsagoAPICommonModelsInsuranceDriverEditModel[] | null
}

export interface OsagoAPICommonModelsInsurancePersonEditModel {
  name?: string | null
  surname?: string | null
  patronymic?: string | null
  gender?: OsagoAPICommonModelsSex

  /** @format date-time */
  birthDate?: string | null
  phone?: string | null
  email?: string | null
  passport?: OsagoAPICommonModelsInsuranceDocumentEditModel
  address?: OsagoAPICommonModelsCommonAddressEditModel
}

export interface OsagoAPICommonModelsInsuranceRegCardEditModel {
  sendOnEmail?: boolean
  email?: string | null
  sendOnPhone?: boolean
  phone?: string | null

  /** @format uuid */
  insuranceCompanyId?: string
  insuranceSessionId?: string | null
  cardId?: string | null
  ignoreAsyncMode?: boolean
}

/**
 * @format int32
 */
export type OsagoAPICommonModelsInsuranceCardStatus =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8

/**
 * @format int32
 */
export type OsagoAPICommonModelsInsuranseCalcStatus =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14

export interface OsagoAPICommonModelsOldApiPdfFile {
  type?: OsagoAPICommonModelsPdfType
  fileName?: string | null
  fileId?: string | null
}

export interface OsagoAPICommonModelsOldApiResponcesBuyResponse {
  /** @format double */
  price?: number

  /** @format double */
  osagoPrice?: number

  /** @format double */
  upsalePrice?: number

  /** @format int32 */
  minMonth?: number | null

  /** @format date-time */
  minBeginDate?: string | null

  /** @format double */
  comission?: number | null
  status?: OsagoAPICommonModelsInsuranseCalcStatus
  payLink?: string | null

  /** @format date-time */
  payLinkExpDate?: string
}

export interface OsagoAPICommonModelsOldApiResponcesCalculateResponse {
  /** @format double */
  price?: number

  /** @format double */
  osagoPrice?: number

  /** @format double */
  upsalePrice?: number

  /** @format int32 */
  minMonth?: number | null

  /** @format date-time */
  minBeginDate?: string | null

  /** @format double */
  comission?: number
  status?: OsagoAPICommonModelsInsuranseCalcStatus
}

export interface OsagoAPICommonModelsOldApiResponcesOldCreationResponse {
  /** @format int32 */
  id?: number
}

export interface OsagoAPICommonModelsOldApiResponcesPaylinkResponse {
  payLink?: string | null

  /** @format date-time */
  expirationDate?: string | null
  status?: OsagoAPICommonModelsInsuranseCalcStatus
}

export interface OsagoAPICommonModelsOldApiViewsAddressReadModel {
  state?: string | null
  region?: string | null
  city?: string | null
  street?: string | null
  house?: string | null
  building?: string | null
  apartment?: string | null
  zip?: string | null
  fiasId?: string | null
  stateFiasId?: string | null
  cityFiasId?: string | null
  streetFiasId?: string | null
  kladrId?: string | null
  okato?: string | null
  value?: string | null
}

export interface OsagoAPICommonModelsOldApiViewsPartherCarDocumentView {
  docTypeId?: string | null
  number?: string | null
  seria?: string | null
}

export interface OsagoAPICommonModelsOldApiViewsPartherDriverView {
  type?: OsagoAPICommonModelsDriverType
  person?: OsagoAPICommonModelsOldApiViewsParthnerPersonView
  driverLicense?: OsagoAPICommonModelsOldApiViewsParthnerDocumentView
  oldDriverLicense?: OsagoAPICommonModelsOldApiViewsParthnerDocumentView

  /** @format date-time */
  firstLicenseDate?: string
}

export interface OsagoAPICommonModelsOldApiViewsParthnerCalcStateView {
  /** @format double */
  price?: number

  /** @format double */
  comission?: number | null
}

export interface OsagoAPICommonModelsOldApiViewsParthnerCardViewV1 {
  /** @format int32 */
  id?: number
  insuranceCompany?: string | null

  /** @format date-time */
  beginDate?: string

  /** @format int32 */
  insuranceMonth?: number
  prevPolicySerial?: string | null
  prevPolicyNumber?: string | null
  policySerial?: string | null
  policyNumber?: string | null
  car?: OsagoAPICommonModelsOldApiViewsParthnerCarView
  insurer?: OsagoAPICommonModelsOldApiViewsParthnerPersonView
  owner?: OsagoAPICommonModelsOldApiViewsParthnerPersonView
  drivers?: OsagoAPICommonModelsOldApiViewsPartherDriverView[] | null
  status?: OsagoAPICommonModelsInsuranceCardStatus
  calcState?: OsagoAPICommonModelsOldApiViewsParthnerCalcStateView
}

export interface OsagoAPICommonModelsOldApiViewsParthnerCarView {
  insuranceCompanyMark?: string | null
  insuranceCompanyModel?: string | null

  /** @format int32 */
  markId?: number

  /** @format int32 */
  modelId?: number

  /** @format int32 */
  yearIssue?: number
  withUseTrailer?: boolean

  /** @format double */
  power?: number
  licensePlate?: string | null
  vin?: string | null
  bodyNumber?: string | null
  chassisNumber?: string | null
  ticketCarLater?: boolean
  isNotRequiredDK?: boolean
  ticketCar?: string | null
  ticketCarNumber?: string | null

  /** @format date-time */
  ticketDiagnosticStartDate?: string | null

  /** @format date-time */
  ticketDiagnosticDate?: string | null
  documentCar?: OsagoAPICommonModelsOldApiViewsPartherCarDocumentView
}

export interface OsagoAPICommonModelsOldApiViewsParthnerDocumentView {
  docTypeId?: string | null
  number?: string | null
  seria?: string | null

  /** @format date-time */
  docDate?: string | null
  countryCode?: string | null
  placeOfIssue?: string | null
}

export interface OsagoAPICommonModelsOldApiViewsParthnerPersonView {
  surname?: string | null
  name?: string | null
  patronymic?: string | null
  gender?: OsagoAPICommonModelsSex

  /** @format date-time */
  birthDate?: string | null
  passport?: OsagoAPICommonModelsOldApiViewsParthnerDocumentView
  address?: OsagoAPICommonModelsOldApiViewsAddressReadModel
  phone?: string | null
  email?: string | null
}

export interface OsagoAPICommonModelsParterApiResponcesDocumentTypeResponse {
  /** @format int32 */
  id?: number
  title?: string | null
  description?: string | null
}

/**
 * @format int32
 */
export type OsagoAPICommonModelsPdfType = 0 | 1 | 2 | 3 | 4

/**
 * @format int32
 */
export type OsagoAPICommonModelsSellSourceType = 1 | 2 | 3

/**
 * @format int32
 */
export type OsagoAPICommonModelsSex = 1 | 2

/**
 * @format int32
 */
export type OsagoAPICommonModelsUsageTarget = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface OsagoAPICommonModelsWidgetResponcesApiResponse {
  success?: boolean
  error?: string | null
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsInsuranceCardStatus {
  success?: boolean
  error?: string | null
  data?: OsagoAPICommonModelsInsuranceCardStatus
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesBuyResponse {
  success?: boolean
  error?: string | null
  data?: OsagoAPICommonModelsOldApiResponcesBuyResponse
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesCalculateResponse {
  success?: boolean
  error?: string | null
  data?: OsagoAPICommonModelsOldApiResponcesCalculateResponse
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesOldCreationResponse {
  success?: boolean
  error?: string | null
  data?: OsagoAPICommonModelsOldApiResponcesOldCreationResponse
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesPaylinkResponse {
  success?: boolean
  error?: string | null
  data?: OsagoAPICommonModelsOldApiResponcesPaylinkResponse
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiViewsParthnerCardViewV1 {
  success?: boolean
  error?: string | null
  data?: OsagoAPICommonModelsOldApiViewsParthnerCardViewV1
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1SystemCollectionsGenericIEnumerable1OsagoAPICommonModelsOldApiPdfFile {
  success?: boolean
  error?: string | null
  data?: OsagoAPICommonModelsOldApiPdfFile[] | null
}

export interface OsagoAPICommonModelsWidgetResponcesApiResponse1SystemInt32 {
  success?: boolean
  error?: string | null

  /** @format int32 */
  data?: number
}

export interface OsagoAPICommonModelsWidgetResponcesCompanyResponse {
  code?: string | null
  title?: string | null

  /** @format uuid */
  id?: string
  conversionRating?: string | null
  reliabilityRating?: string | null
}

export interface OsagoAPICommonModelsWidgetResponcesMarkResponse {
  title?: string | null
  id?: string | null
}

export interface OsagoAPICommonModelsWidgetResponcesModelResponse {
  id?: string | null
  title?: string | null
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D
  error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = ''
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(
      typeof value === 'number' ? value : `${value}`
    )}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter(
      (key) => 'undefined' !== typeof query[key]
    )
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string')
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(
      `${baseUrl || this.baseUrl || ''}${path}${
        queryString ? `?${queryString}` : ''
      }`,
      {
        ...requestParams,
        headers: {
          ...(type && type !== ContentType.FormData
            ? { 'Content-Type': type }
            : {}),
          ...(requestParams.headers || {}),
        },
        signal: cancelToken
          ? this.createAbortSignal(cancelToken)
          : requestParams.signal,
        body:
          typeof body === 'undefined' || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>
      r.data = null as unknown as T
      r.error = null as unknown as E

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e) => {
              r.error = e
              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (!response.ok) throw data
      return data
    })
  }
}

/**
 * @title Osago.PartnerApi
 * @version v1
 *
 * # Последовательность вызова методов
 * 1. [Авторизация](#Auth/post_auth)
 * 2. [Создание проекта полиса](#Card/post_card)
 * 3. [Выполнение расчета в СК](#Insurance/post_insurance__company___cardId__calculate)
 * 4. [Оформление](#Insurance/post_insurance__company___cardId__buy)
 * 5. [Оформление с подтверждением телефона](#Insurance/post_insurance__company___cardId__buy_code) <br/>Если выбрана СК ВСК или РГС то необходимо подтвердить телефон, отправив sms-код, который пришел на телефон, указанный на этапе создания проекта.
 * 6. [Проверка статуса оплаты](#Card/get_card__cardId__status)
 * 7. [Выгрузка файлов полиса](#Card/get_card__cardId__files) <br/>[Выгрузка конкретного файла](#Card/get_card__cardId__file)
 */
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description В ответ получаем токен, который используем в заголовке авторизации по схеме Bearer при формировании запроса к API
     *
     * @tags Auth
     * @name AuthCreate
     * @summary Авторизация пользователя
     * @request POST:/auth
     * @secure
     */
    authCreate: (
      data: OsagoAPICommonModelsAuthLoginRequest,
      params: RequestParams = {}
    ) =>
      this.request<OsagoAPICommonModelsAuthLoginResponse, void>({
        path: `/auth`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
  card = {
    /**
     * @description Необходимо предоставить следующий набор данных:<br /> * страхователь * собственник * ТС * водители * параметры ОСАГО такие как:  срок страхования, дата начала и прочее
     *
     * @tags Card
     * @name CardCreate
     * @summary Создание новой карты
     * @request POST:/card
     * @secure
     */
    cardCreate: (
      data: OsagoAPICommonModelsInsuranceInsuranceCardEditModel,
      params: RequestParams = {}
    ) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesOldCreationResponse,
        any
      >({
        path: `/card`,
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name CardDetail
     * @summary Получение данных карты
     * @request GET:/card/{cardId}
     * @secure
     */
    cardDetail: (cardId: number, params: RequestParams = {}) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiViewsParthnerCardViewV1,
        void
      >({
        path: `/card/${cardId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Необходимо передавать измененную карту целиком. Сбрасывает все расчеты на начальное состояние. Обновление возможно только для полисов в статусе Ченовик, Расчет плюс или минус
     *
     * @tags Card
     * @name CardUpdate
     * @summary Изменение данных карты
     * @request PUT:/card/{cardId}
     * @secure
     */
    cardUpdate: (
      cardId: number,
      data: OsagoAPICommonModelsInsuranceInsuranceCardEditModel,
      params: RequestParams = {}
    ) =>
      this.request<OsagoAPICommonModelsWidgetResponcesApiResponse, void>({
        path: `/card/${cardId}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Может применяться для получения статуса оплаты выпущенного полиса
     *
     * @tags Card
     * @name StatusDetail
     * @summary Получение статуса карты
     * @request GET:/card/{cardId}/status
     * @secure
     */
    statusDetail: (cardId: number, params: RequestParams = {}) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsInsuranceCardStatus,
        void
      >({
        path: `/card/${cardId}/status`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description В ответе получаем Id новой карты в статусе 1
     *
     * @tags Card
     * @name CopyCreate
     * @summary Копирование карты
     * @request POST:/card/{cardId}/copy
     * @secure
     */
    copyCreate: (cardId: number, params: RequestParams = {}) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1SystemInt32,
        void
      >({
        path: `/card/${cardId}/copy`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Файлы доступны только для полисов в статусе **3: Оплачено**
     *
     * @tags Card
     * @name FilesDetail
     * @summary Получение списка файлов карты
     * @request GET:/card/{cardId}/files
     * @secure
     */
    filesDetail: (cardId: number, params: RequestParams = {}) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1SystemCollectionsGenericIEnumerable1OsagoAPICommonModelsOldApiPdfFile,
        void
      >({
        path: `/card/${cardId}/files`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name FileDetail
     * @summary Получение файла карты по имени
     * @request GET:/card/{cardId}/file
     * @secure
     */
    fileDetail: (
      cardId: number,
      query?: { fileName?: string },
      params: RequestParams = {}
    ) =>
      this.request<void, void>({
        path: `/card/${cardId}/file`,
        method: 'GET',
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Card
     * @name PaylinkDetail
     * @summary Получение ссылки на оплату
     * @request GET:/card/{cardId}/paylink
     * @secure
     */
    paylinkDetail: (cardId: number, params: RequestParams = {}) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesPaylinkResponse,
        void
      >({
        path: `/card/${cardId}/paylink`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Для РГС и ВСК потребуется повторное подтверждение телефона. <br />В этом случае **status=7 Требуется подтвердить телефон страхователя** После чего вызвать метод [Покупки](#/Insurance/post_insurance__company___cardId__buy_code) * В ответе может придти сообщение `Невозможно обновить ссылку. Необходимо скопировать полис и повторить расчет` В этом случае необходимо вызвать [метод копирования карты](#/Card/post_card__cardId__copy) и запустить расчет по СК
     *
     * @tags Card
     * @name PaylinkUpdateCreate
     * @summary Обновление ссылки на оплату
     * @request POST:/card/{cardId}/paylink/update
     * @secure
     */
    paylinkUpdateCreate: (cardId: number, params: RequestParams = {}) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesPaylinkResponse,
        void
      >({
        path: `/card/${cardId}/paylink/update`,
        method: 'POST',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  dict = {
    /**
     * No description
     *
     * @tags Dicts
     * @name CompanyList
     * @summary Получение списка страховых компаний
     * @request GET:/dict/company
     * @secure
     */
    companyList: (params: RequestParams = {}) =>
      this.request<OsagoAPICommonModelsWidgetResponcesCompanyResponse[], any>({
        path: `/dict/company`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dicts
     * @name MarkList
     * @summary Получение списка марок автомобилей
     * @request GET:/dict/mark
     * @secure
     */
    markList: (params: RequestParams = {}) =>
      this.request<OsagoAPICommonModelsWidgetResponcesMarkResponse[], any>({
        path: `/dict/mark`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dicts
     * @name ModelList
     * @summary Получение списка моделей выбранной марки автомобилей
     * @request GET:/dict/model
     * @secure
     */
    modelList: (query: { markId: number }, params: RequestParams = {}) =>
      this.request<OsagoAPICommonModelsWidgetResponcesModelResponse[], any>({
        path: `/dict/model`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dicts
     * @name MarkDetail
     * @summary Получение справочника марок конкретной страховой компании
     * @request GET:/dict/{company}/mark
     * @secure
     */
    markDetail: (company: string, params: RequestParams = {}) =>
      this.request<OsagoAPICommonModelsWidgetResponcesMarkResponse[], void>({
        path: `/dict/${company}/mark`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dicts
     * @name ModelDetail
     * @summary Получение справочника моделей конкретной страховой компании
     * @request GET:/dict/{company}/model
     * @secure
     */
    modelDetail: (
      company: string,
      query: { markId: string },
      params: RequestParams = {}
    ) =>
      this.request<OsagoAPICommonModelsWidgetResponcesModelResponse[], void>({
        path: `/dict/${company}/model`,
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Dicts
     * @name DocumentsList
     * @summary Получение списка требуемых документов
     * @request GET:/dict/documents
     * @secure
     */
    documentsList: (params: RequestParams = {}) =>
      this.request<
        OsagoAPICommonModelsParterApiResponcesDocumentTypeResponse[],
        any
      >({
        path: `/dict/documents`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),
  }
  insurance = {
    /**
     * @description Запуск расчета в СК. В случае успеха в ответе будет status=4. Если был получен status=6 - необходимо уточнить ТС по справочнику СК и выполнить перерасчет, используя параметры icMarkId и icModelId * запрос может выполнятья больше 2-х минут
     *
     * @tags Insurance
     * @name CalculateCreate
     * @summary Выполнить расчет в страховой компании
     * @request POST:/insurance/{company}/{cardId}/calculate
     * @secure
     */
    calculateCreate: (
      cardId: number,
      company: string,
      query?: { icMarkId?: string; icModelId?: string },
      params: RequestParams = {}
    ) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesCalculateResponse,
        void
      >({
        path: `/insurance/${company}/${cardId}/calculate`,
        method: 'POST',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Может применяться для получения актуального статуса выполняющегося расчета. * Время жизни расчета - в течении дня!
     *
     * @tags Insurance
     * @name InsuranceDetail
     * @summary Получение данных по существующему расчету
     * @request GET:/insurance/{company}/{cardId}
     * @secure
     */
    insuranceDetail: (
      cardId: number,
      company: string,
      params: RequestParams = {}
    ) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesCalculateResponse,
        void
      >({
        path: `/insurance/${company}/${cardId}`,
        method: 'GET',
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @description Оформление возможно только для расчета в статусе **4: Успешный расчет**. Затем: * Расчет переходит в статус **8: Запущен процесс оформления полиса** * По завершнии: * **7: Требуется подтвердить телефон страхователя. Ожидание смс кода**. В этом случае на телефон страхователя должен придти смс-код, который необходимо передать в  [метод продолжения оформления](#/Insurance/post_insurance__company___cardId__buy_code). Если смс не приходит - вызвать метод [переотправки](#/Insurance/post_insurance__company___cardId__resendcode) * **9: СК отказала при покупке** * **10: Успешное оформление. Получена ссылка на оплату** В случае успеха в ответе должен быть параметр PayLink Возможные ошибки: + Неверный статус расчета при выполнении этой операции + Неверные для заданной компании срок страхования или дата начала действия полисa
     *
     * @tags Insurance
     * @name PostInsurance
     * @summary Начало покупки карты (Оформление)
     * @request POST:/insurance/{company}/{cardId}/buy
     * @secure
     */
    postInsurance: (
      cardId: number,
      company: string,
      query?: { force?: boolean },
      params: RequestParams = {}
    ) =>
      this.request<
        OsagoAPICommonModelsWidgetResponcesApiResponse1OsagoAPICommonModelsOldApiResponcesBuyResponse,
        void
      >({
        path: `/insurance/${company}/${cardId}/buy`,
        method: 'POST',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),
  }
}
