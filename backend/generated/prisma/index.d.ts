
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Servizio
 * 
 */
export type Servizio = $Result.DefaultSelection<Prisma.$ServizioPayload>
/**
 * Model Richiesta
 * 
 */
export type Richiesta = $Result.DefaultSelection<Prisma.$RichiestaPayload>
/**
 * Model Appuntamento
 * 
 */
export type Appuntamento = $Result.DefaultSelection<Prisma.$AppuntamentoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Veicolo
 * 
 */
export type Veicolo = $Result.DefaultSelection<Prisma.$VeicoloPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CategoriaServizio: {
  MECCANICA: 'MECCANICA',
  CARROZZERIA: 'CARROZZERIA',
  GOMME: 'GOMME',
  ARIA_CONDIZIONATA: 'ARIA_CONDIZIONATA',
  LAVAGGIO: 'LAVAGGIO',
  SANIFICAZIONE: 'SANIFICAZIONE',
  REVISIONE: 'REVISIONE'
};

export type CategoriaServizio = (typeof CategoriaServizio)[keyof typeof CategoriaServizio]


export const StatoRichiesta: {
  PENDING: 'PENDING',
  APPROVATA: 'APPROVATA',
  RIFIUTATA: 'RIFIUTATA'
};

export type StatoRichiesta = (typeof StatoRichiesta)[keyof typeof StatoRichiesta]


export const StatoAppuntamento: {
  CONFERMATO: 'CONFERMATO',
  IN_CORSO: 'IN_CORSO',
  COMPLETATO: 'COMPLETATO',
  CANCELLATO: 'CANCELLATO'
};

export type StatoAppuntamento = (typeof StatoAppuntamento)[keyof typeof StatoAppuntamento]

}

export type CategoriaServizio = $Enums.CategoriaServizio

export const CategoriaServizio: typeof $Enums.CategoriaServizio

export type StatoRichiesta = $Enums.StatoRichiesta

export const StatoRichiesta: typeof $Enums.StatoRichiesta

export type StatoAppuntamento = $Enums.StatoAppuntamento

export const StatoAppuntamento: typeof $Enums.StatoAppuntamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Servizios
 * const servizios = await prisma.servizio.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Servizios
   * const servizios = await prisma.servizio.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.servizio`: Exposes CRUD operations for the **Servizio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servizios
    * const servizios = await prisma.servizio.findMany()
    * ```
    */
  get servizio(): Prisma.ServizioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.richiesta`: Exposes CRUD operations for the **Richiesta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Richiestas
    * const richiestas = await prisma.richiesta.findMany()
    * ```
    */
  get richiesta(): Prisma.RichiestaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appuntamento`: Exposes CRUD operations for the **Appuntamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appuntamentos
    * const appuntamentos = await prisma.appuntamento.findMany()
    * ```
    */
  get appuntamento(): Prisma.AppuntamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veicolo`: Exposes CRUD operations for the **Veicolo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veicolos
    * const veicolos = await prisma.veicolo.findMany()
    * ```
    */
  get veicolo(): Prisma.VeicoloDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Servizio: 'Servizio',
    Richiesta: 'Richiesta',
    Appuntamento: 'Appuntamento',
    Cliente: 'Cliente',
    Veicolo: 'Veicolo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "servizio" | "richiesta" | "appuntamento" | "cliente" | "veicolo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Servizio: {
        payload: Prisma.$ServizioPayload<ExtArgs>
        fields: Prisma.ServizioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServizioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServizioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload>
          }
          findFirst: {
            args: Prisma.ServizioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServizioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload>
          }
          findMany: {
            args: Prisma.ServizioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload>[]
          }
          create: {
            args: Prisma.ServizioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload>
          }
          createMany: {
            args: Prisma.ServizioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServizioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload>
          }
          update: {
            args: Prisma.ServizioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload>
          }
          deleteMany: {
            args: Prisma.ServizioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServizioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServizioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServizioPayload>
          }
          aggregate: {
            args: Prisma.ServizioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServizio>
          }
          groupBy: {
            args: Prisma.ServizioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServizioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServizioCountArgs<ExtArgs>
            result: $Utils.Optional<ServizioCountAggregateOutputType> | number
          }
        }
      }
      Richiesta: {
        payload: Prisma.$RichiestaPayload<ExtArgs>
        fields: Prisma.RichiestaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RichiestaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RichiestaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload>
          }
          findFirst: {
            args: Prisma.RichiestaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RichiestaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload>
          }
          findMany: {
            args: Prisma.RichiestaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload>[]
          }
          create: {
            args: Prisma.RichiestaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload>
          }
          createMany: {
            args: Prisma.RichiestaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RichiestaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload>
          }
          update: {
            args: Prisma.RichiestaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload>
          }
          deleteMany: {
            args: Prisma.RichiestaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RichiestaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RichiestaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RichiestaPayload>
          }
          aggregate: {
            args: Prisma.RichiestaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRichiesta>
          }
          groupBy: {
            args: Prisma.RichiestaGroupByArgs<ExtArgs>
            result: $Utils.Optional<RichiestaGroupByOutputType>[]
          }
          count: {
            args: Prisma.RichiestaCountArgs<ExtArgs>
            result: $Utils.Optional<RichiestaCountAggregateOutputType> | number
          }
        }
      }
      Appuntamento: {
        payload: Prisma.$AppuntamentoPayload<ExtArgs>
        fields: Prisma.AppuntamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppuntamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppuntamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload>
          }
          findFirst: {
            args: Prisma.AppuntamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppuntamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload>
          }
          findMany: {
            args: Prisma.AppuntamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload>[]
          }
          create: {
            args: Prisma.AppuntamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload>
          }
          createMany: {
            args: Prisma.AppuntamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppuntamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload>
          }
          update: {
            args: Prisma.AppuntamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload>
          }
          deleteMany: {
            args: Prisma.AppuntamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppuntamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppuntamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppuntamentoPayload>
          }
          aggregate: {
            args: Prisma.AppuntamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppuntamento>
          }
          groupBy: {
            args: Prisma.AppuntamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppuntamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppuntamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AppuntamentoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Veicolo: {
        payload: Prisma.$VeicoloPayload<ExtArgs>
        fields: Prisma.VeicoloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeicoloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeicoloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload>
          }
          findFirst: {
            args: Prisma.VeicoloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeicoloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload>
          }
          findMany: {
            args: Prisma.VeicoloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload>[]
          }
          create: {
            args: Prisma.VeicoloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload>
          }
          createMany: {
            args: Prisma.VeicoloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VeicoloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload>
          }
          update: {
            args: Prisma.VeicoloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload>
          }
          deleteMany: {
            args: Prisma.VeicoloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeicoloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VeicoloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeicoloPayload>
          }
          aggregate: {
            args: Prisma.VeicoloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeicolo>
          }
          groupBy: {
            args: Prisma.VeicoloGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeicoloGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeicoloCountArgs<ExtArgs>
            result: $Utils.Optional<VeicoloCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    servizio?: ServizioOmit
    richiesta?: RichiestaOmit
    appuntamento?: AppuntamentoOmit
    cliente?: ClienteOmit
    veicolo?: VeicoloOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ServizioCountOutputType
   */

  export type ServizioCountOutputType = {
    richieste: number
    appuntamenti: number
  }

  export type ServizioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    richieste?: boolean | ServizioCountOutputTypeCountRichiesteArgs
    appuntamenti?: boolean | ServizioCountOutputTypeCountAppuntamentiArgs
  }

  // Custom InputTypes
  /**
   * ServizioCountOutputType without action
   */
  export type ServizioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServizioCountOutputType
     */
    select?: ServizioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServizioCountOutputType without action
   */
  export type ServizioCountOutputTypeCountRichiesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RichiestaWhereInput
  }

  /**
   * ServizioCountOutputType without action
   */
  export type ServizioCountOutputTypeCountAppuntamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppuntamentoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    veicoli: number
    appuntamenti: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veicoli?: boolean | ClienteCountOutputTypeCountVeicoliArgs
    appuntamenti?: boolean | ClienteCountOutputTypeCountAppuntamentiArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountVeicoliArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeicoloWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAppuntamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppuntamentoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Servizio
   */

  export type AggregateServizio = {
    _count: ServizioCountAggregateOutputType | null
    _avg: ServizioAvgAggregateOutputType | null
    _sum: ServizioSumAggregateOutputType | null
    _min: ServizioMinAggregateOutputType | null
    _max: ServizioMaxAggregateOutputType | null
  }

  export type ServizioAvgAggregateOutputType = {
    prezzo: number | null
    durata: number | null
  }

  export type ServizioSumAggregateOutputType = {
    prezzo: number | null
    durata: number | null
  }

  export type ServizioMinAggregateOutputType = {
    id: string | null
    nome: string | null
    descrizione: string | null
    prezzo: number | null
    durata: number | null
    categoria: $Enums.CategoriaServizio | null
    attivo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServizioMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    descrizione: string | null
    prezzo: number | null
    durata: number | null
    categoria: $Enums.CategoriaServizio | null
    attivo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServizioCountAggregateOutputType = {
    id: number
    nome: number
    descrizione: number
    prezzo: number
    durata: number
    categoria: number
    attivo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServizioAvgAggregateInputType = {
    prezzo?: true
    durata?: true
  }

  export type ServizioSumAggregateInputType = {
    prezzo?: true
    durata?: true
  }

  export type ServizioMinAggregateInputType = {
    id?: true
    nome?: true
    descrizione?: true
    prezzo?: true
    durata?: true
    categoria?: true
    attivo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServizioMaxAggregateInputType = {
    id?: true
    nome?: true
    descrizione?: true
    prezzo?: true
    durata?: true
    categoria?: true
    attivo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServizioCountAggregateInputType = {
    id?: true
    nome?: true
    descrizione?: true
    prezzo?: true
    durata?: true
    categoria?: true
    attivo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServizioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servizio to aggregate.
     */
    where?: ServizioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servizios to fetch.
     */
    orderBy?: ServizioOrderByWithRelationInput | ServizioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServizioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servizios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servizios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servizios
    **/
    _count?: true | ServizioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServizioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServizioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServizioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServizioMaxAggregateInputType
  }

  export type GetServizioAggregateType<T extends ServizioAggregateArgs> = {
        [P in keyof T & keyof AggregateServizio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServizio[P]>
      : GetScalarType<T[P], AggregateServizio[P]>
  }




  export type ServizioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServizioWhereInput
    orderBy?: ServizioOrderByWithAggregationInput | ServizioOrderByWithAggregationInput[]
    by: ServizioScalarFieldEnum[] | ServizioScalarFieldEnum
    having?: ServizioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServizioCountAggregateInputType | true
    _avg?: ServizioAvgAggregateInputType
    _sum?: ServizioSumAggregateInputType
    _min?: ServizioMinAggregateInputType
    _max?: ServizioMaxAggregateInputType
  }

  export type ServizioGroupByOutputType = {
    id: string
    nome: string
    descrizione: string
    prezzo: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServizioCountAggregateOutputType | null
    _avg: ServizioAvgAggregateOutputType | null
    _sum: ServizioSumAggregateOutputType | null
    _min: ServizioMinAggregateOutputType | null
    _max: ServizioMaxAggregateOutputType | null
  }

  type GetServizioGroupByPayload<T extends ServizioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServizioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServizioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServizioGroupByOutputType[P]>
            : GetScalarType<T[P], ServizioGroupByOutputType[P]>
        }
      >
    >


  export type ServizioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descrizione?: boolean
    prezzo?: boolean
    durata?: boolean
    categoria?: boolean
    attivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    richieste?: boolean | Servizio$richiesteArgs<ExtArgs>
    appuntamenti?: boolean | Servizio$appuntamentiArgs<ExtArgs>
    _count?: boolean | ServizioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servizio"]>



  export type ServizioSelectScalar = {
    id?: boolean
    nome?: boolean
    descrizione?: boolean
    prezzo?: boolean
    durata?: boolean
    categoria?: boolean
    attivo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServizioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descrizione" | "prezzo" | "durata" | "categoria" | "attivo" | "createdAt" | "updatedAt", ExtArgs["result"]["servizio"]>
  export type ServizioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    richieste?: boolean | Servizio$richiesteArgs<ExtArgs>
    appuntamenti?: boolean | Servizio$appuntamentiArgs<ExtArgs>
    _count?: boolean | ServizioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServizioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servizio"
    objects: {
      richieste: Prisma.$RichiestaPayload<ExtArgs>[]
      appuntamenti: Prisma.$AppuntamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      descrizione: string
      prezzo: number | null
      durata: number
      categoria: $Enums.CategoriaServizio
      attivo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["servizio"]>
    composites: {}
  }

  type ServizioGetPayload<S extends boolean | null | undefined | ServizioDefaultArgs> = $Result.GetResult<Prisma.$ServizioPayload, S>

  type ServizioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServizioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServizioCountAggregateInputType | true
    }

  export interface ServizioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servizio'], meta: { name: 'Servizio' } }
    /**
     * Find zero or one Servizio that matches the filter.
     * @param {ServizioFindUniqueArgs} args - Arguments to find a Servizio
     * @example
     * // Get one Servizio
     * const servizio = await prisma.servizio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServizioFindUniqueArgs>(args: SelectSubset<T, ServizioFindUniqueArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servizio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServizioFindUniqueOrThrowArgs} args - Arguments to find a Servizio
     * @example
     * // Get one Servizio
     * const servizio = await prisma.servizio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServizioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServizioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servizio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServizioFindFirstArgs} args - Arguments to find a Servizio
     * @example
     * // Get one Servizio
     * const servizio = await prisma.servizio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServizioFindFirstArgs>(args?: SelectSubset<T, ServizioFindFirstArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servizio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServizioFindFirstOrThrowArgs} args - Arguments to find a Servizio
     * @example
     * // Get one Servizio
     * const servizio = await prisma.servizio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServizioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServizioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servizios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServizioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servizios
     * const servizios = await prisma.servizio.findMany()
     * 
     * // Get first 10 Servizios
     * const servizios = await prisma.servizio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servizioWithIdOnly = await prisma.servizio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServizioFindManyArgs>(args?: SelectSubset<T, ServizioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servizio.
     * @param {ServizioCreateArgs} args - Arguments to create a Servizio.
     * @example
     * // Create one Servizio
     * const Servizio = await prisma.servizio.create({
     *   data: {
     *     // ... data to create a Servizio
     *   }
     * })
     * 
     */
    create<T extends ServizioCreateArgs>(args: SelectSubset<T, ServizioCreateArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servizios.
     * @param {ServizioCreateManyArgs} args - Arguments to create many Servizios.
     * @example
     * // Create many Servizios
     * const servizio = await prisma.servizio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServizioCreateManyArgs>(args?: SelectSubset<T, ServizioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Servizio.
     * @param {ServizioDeleteArgs} args - Arguments to delete one Servizio.
     * @example
     * // Delete one Servizio
     * const Servizio = await prisma.servizio.delete({
     *   where: {
     *     // ... filter to delete one Servizio
     *   }
     * })
     * 
     */
    delete<T extends ServizioDeleteArgs>(args: SelectSubset<T, ServizioDeleteArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servizio.
     * @param {ServizioUpdateArgs} args - Arguments to update one Servizio.
     * @example
     * // Update one Servizio
     * const servizio = await prisma.servizio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServizioUpdateArgs>(args: SelectSubset<T, ServizioUpdateArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servizios.
     * @param {ServizioDeleteManyArgs} args - Arguments to filter Servizios to delete.
     * @example
     * // Delete a few Servizios
     * const { count } = await prisma.servizio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServizioDeleteManyArgs>(args?: SelectSubset<T, ServizioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servizios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServizioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servizios
     * const servizio = await prisma.servizio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServizioUpdateManyArgs>(args: SelectSubset<T, ServizioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servizio.
     * @param {ServizioUpsertArgs} args - Arguments to update or create a Servizio.
     * @example
     * // Update or create a Servizio
     * const servizio = await prisma.servizio.upsert({
     *   create: {
     *     // ... data to create a Servizio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servizio we want to update
     *   }
     * })
     */
    upsert<T extends ServizioUpsertArgs>(args: SelectSubset<T, ServizioUpsertArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servizios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServizioCountArgs} args - Arguments to filter Servizios to count.
     * @example
     * // Count the number of Servizios
     * const count = await prisma.servizio.count({
     *   where: {
     *     // ... the filter for the Servizios we want to count
     *   }
     * })
    **/
    count<T extends ServizioCountArgs>(
      args?: Subset<T, ServizioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServizioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servizio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServizioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServizioAggregateArgs>(args: Subset<T, ServizioAggregateArgs>): Prisma.PrismaPromise<GetServizioAggregateType<T>>

    /**
     * Group by Servizio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServizioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServizioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServizioGroupByArgs['orderBy'] }
        : { orderBy?: ServizioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServizioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServizioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servizio model
   */
  readonly fields: ServizioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servizio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServizioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    richieste<T extends Servizio$richiesteArgs<ExtArgs> = {}>(args?: Subset<T, Servizio$richiesteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appuntamenti<T extends Servizio$appuntamentiArgs<ExtArgs> = {}>(args?: Subset<T, Servizio$appuntamentiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servizio model
   */
  interface ServizioFieldRefs {
    readonly id: FieldRef<"Servizio", 'String'>
    readonly nome: FieldRef<"Servizio", 'String'>
    readonly descrizione: FieldRef<"Servizio", 'String'>
    readonly prezzo: FieldRef<"Servizio", 'Float'>
    readonly durata: FieldRef<"Servizio", 'Int'>
    readonly categoria: FieldRef<"Servizio", 'CategoriaServizio'>
    readonly attivo: FieldRef<"Servizio", 'Boolean'>
    readonly createdAt: FieldRef<"Servizio", 'DateTime'>
    readonly updatedAt: FieldRef<"Servizio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servizio findUnique
   */
  export type ServizioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * Filter, which Servizio to fetch.
     */
    where: ServizioWhereUniqueInput
  }

  /**
   * Servizio findUniqueOrThrow
   */
  export type ServizioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * Filter, which Servizio to fetch.
     */
    where: ServizioWhereUniqueInput
  }

  /**
   * Servizio findFirst
   */
  export type ServizioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * Filter, which Servizio to fetch.
     */
    where?: ServizioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servizios to fetch.
     */
    orderBy?: ServizioOrderByWithRelationInput | ServizioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servizios.
     */
    cursor?: ServizioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servizios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servizios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servizios.
     */
    distinct?: ServizioScalarFieldEnum | ServizioScalarFieldEnum[]
  }

  /**
   * Servizio findFirstOrThrow
   */
  export type ServizioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * Filter, which Servizio to fetch.
     */
    where?: ServizioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servizios to fetch.
     */
    orderBy?: ServizioOrderByWithRelationInput | ServizioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servizios.
     */
    cursor?: ServizioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servizios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servizios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servizios.
     */
    distinct?: ServizioScalarFieldEnum | ServizioScalarFieldEnum[]
  }

  /**
   * Servizio findMany
   */
  export type ServizioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * Filter, which Servizios to fetch.
     */
    where?: ServizioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servizios to fetch.
     */
    orderBy?: ServizioOrderByWithRelationInput | ServizioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servizios.
     */
    cursor?: ServizioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servizios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servizios.
     */
    skip?: number
    distinct?: ServizioScalarFieldEnum | ServizioScalarFieldEnum[]
  }

  /**
   * Servizio create
   */
  export type ServizioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servizio.
     */
    data: XOR<ServizioCreateInput, ServizioUncheckedCreateInput>
  }

  /**
   * Servizio createMany
   */
  export type ServizioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servizios.
     */
    data: ServizioCreateManyInput | ServizioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servizio update
   */
  export type ServizioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servizio.
     */
    data: XOR<ServizioUpdateInput, ServizioUncheckedUpdateInput>
    /**
     * Choose, which Servizio to update.
     */
    where: ServizioWhereUniqueInput
  }

  /**
   * Servizio updateMany
   */
  export type ServizioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servizios.
     */
    data: XOR<ServizioUpdateManyMutationInput, ServizioUncheckedUpdateManyInput>
    /**
     * Filter which Servizios to update
     */
    where?: ServizioWhereInput
    /**
     * Limit how many Servizios to update.
     */
    limit?: number
  }

  /**
   * Servizio upsert
   */
  export type ServizioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servizio to update in case it exists.
     */
    where: ServizioWhereUniqueInput
    /**
     * In case the Servizio found by the `where` argument doesn't exist, create a new Servizio with this data.
     */
    create: XOR<ServizioCreateInput, ServizioUncheckedCreateInput>
    /**
     * In case the Servizio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServizioUpdateInput, ServizioUncheckedUpdateInput>
  }

  /**
   * Servizio delete
   */
  export type ServizioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
    /**
     * Filter which Servizio to delete.
     */
    where: ServizioWhereUniqueInput
  }

  /**
   * Servizio deleteMany
   */
  export type ServizioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servizios to delete
     */
    where?: ServizioWhereInput
    /**
     * Limit how many Servizios to delete.
     */
    limit?: number
  }

  /**
   * Servizio.richieste
   */
  export type Servizio$richiesteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    where?: RichiestaWhereInput
    orderBy?: RichiestaOrderByWithRelationInput | RichiestaOrderByWithRelationInput[]
    cursor?: RichiestaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RichiestaScalarFieldEnum | RichiestaScalarFieldEnum[]
  }

  /**
   * Servizio.appuntamenti
   */
  export type Servizio$appuntamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    where?: AppuntamentoWhereInput
    orderBy?: AppuntamentoOrderByWithRelationInput | AppuntamentoOrderByWithRelationInput[]
    cursor?: AppuntamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppuntamentoScalarFieldEnum | AppuntamentoScalarFieldEnum[]
  }

  /**
   * Servizio without action
   */
  export type ServizioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servizio
     */
    select?: ServizioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servizio
     */
    omit?: ServizioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServizioInclude<ExtArgs> | null
  }


  /**
   * Model Richiesta
   */

  export type AggregateRichiesta = {
    _count: RichiestaCountAggregateOutputType | null
    _min: RichiestaMinAggregateOutputType | null
    _max: RichiestaMaxAggregateOutputType | null
  }

  export type RichiestaMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cognome: string | null
    email: string | null
    telefono: string | null
    note: string | null
    servizioId: string | null
    stato: $Enums.StatoRichiesta | null
    pdfGenerato: boolean | null
    urlPdf: string | null
    dataPreferita: Date | null
    oraPreferita: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RichiestaMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cognome: string | null
    email: string | null
    telefono: string | null
    note: string | null
    servizioId: string | null
    stato: $Enums.StatoRichiesta | null
    pdfGenerato: boolean | null
    urlPdf: string | null
    dataPreferita: Date | null
    oraPreferita: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RichiestaCountAggregateOutputType = {
    id: number
    nome: number
    cognome: number
    email: number
    telefono: number
    note: number
    servizioId: number
    stato: number
    pdfGenerato: number
    urlPdf: number
    dataPreferita: number
    oraPreferita: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RichiestaMinAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    email?: true
    telefono?: true
    note?: true
    servizioId?: true
    stato?: true
    pdfGenerato?: true
    urlPdf?: true
    dataPreferita?: true
    oraPreferita?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RichiestaMaxAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    email?: true
    telefono?: true
    note?: true
    servizioId?: true
    stato?: true
    pdfGenerato?: true
    urlPdf?: true
    dataPreferita?: true
    oraPreferita?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RichiestaCountAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    email?: true
    telefono?: true
    note?: true
    servizioId?: true
    stato?: true
    pdfGenerato?: true
    urlPdf?: true
    dataPreferita?: true
    oraPreferita?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RichiestaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Richiesta to aggregate.
     */
    where?: RichiestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Richiestas to fetch.
     */
    orderBy?: RichiestaOrderByWithRelationInput | RichiestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RichiestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Richiestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Richiestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Richiestas
    **/
    _count?: true | RichiestaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RichiestaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RichiestaMaxAggregateInputType
  }

  export type GetRichiestaAggregateType<T extends RichiestaAggregateArgs> = {
        [P in keyof T & keyof AggregateRichiesta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRichiesta[P]>
      : GetScalarType<T[P], AggregateRichiesta[P]>
  }




  export type RichiestaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RichiestaWhereInput
    orderBy?: RichiestaOrderByWithAggregationInput | RichiestaOrderByWithAggregationInput[]
    by: RichiestaScalarFieldEnum[] | RichiestaScalarFieldEnum
    having?: RichiestaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RichiestaCountAggregateInputType | true
    _min?: RichiestaMinAggregateInputType
    _max?: RichiestaMaxAggregateInputType
  }

  export type RichiestaGroupByOutputType = {
    id: string
    nome: string
    cognome: string
    email: string
    telefono: string
    note: string | null
    servizioId: string
    stato: $Enums.StatoRichiesta
    pdfGenerato: boolean
    urlPdf: string | null
    dataPreferita: Date | null
    oraPreferita: Date | null
    createdAt: Date
    updatedAt: Date
    _count: RichiestaCountAggregateOutputType | null
    _min: RichiestaMinAggregateOutputType | null
    _max: RichiestaMaxAggregateOutputType | null
  }

  type GetRichiestaGroupByPayload<T extends RichiestaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RichiestaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RichiestaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RichiestaGroupByOutputType[P]>
            : GetScalarType<T[P], RichiestaGroupByOutputType[P]>
        }
      >
    >


  export type RichiestaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cognome?: boolean
    email?: boolean
    telefono?: boolean
    note?: boolean
    servizioId?: boolean
    stato?: boolean
    pdfGenerato?: boolean
    urlPdf?: boolean
    dataPreferita?: boolean
    oraPreferita?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servizio?: boolean | ServizioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["richiesta"]>



  export type RichiestaSelectScalar = {
    id?: boolean
    nome?: boolean
    cognome?: boolean
    email?: boolean
    telefono?: boolean
    note?: boolean
    servizioId?: boolean
    stato?: boolean
    pdfGenerato?: boolean
    urlPdf?: boolean
    dataPreferita?: boolean
    oraPreferita?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RichiestaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cognome" | "email" | "telefono" | "note" | "servizioId" | "stato" | "pdfGenerato" | "urlPdf" | "dataPreferita" | "oraPreferita" | "createdAt" | "updatedAt", ExtArgs["result"]["richiesta"]>
  export type RichiestaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servizio?: boolean | ServizioDefaultArgs<ExtArgs>
  }

  export type $RichiestaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Richiesta"
    objects: {
      servizio: Prisma.$ServizioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cognome: string
      email: string
      telefono: string
      note: string | null
      servizioId: string
      stato: $Enums.StatoRichiesta
      pdfGenerato: boolean
      urlPdf: string | null
      dataPreferita: Date | null
      oraPreferita: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["richiesta"]>
    composites: {}
  }

  type RichiestaGetPayload<S extends boolean | null | undefined | RichiestaDefaultArgs> = $Result.GetResult<Prisma.$RichiestaPayload, S>

  type RichiestaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RichiestaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RichiestaCountAggregateInputType | true
    }

  export interface RichiestaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Richiesta'], meta: { name: 'Richiesta' } }
    /**
     * Find zero or one Richiesta that matches the filter.
     * @param {RichiestaFindUniqueArgs} args - Arguments to find a Richiesta
     * @example
     * // Get one Richiesta
     * const richiesta = await prisma.richiesta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RichiestaFindUniqueArgs>(args: SelectSubset<T, RichiestaFindUniqueArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Richiesta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RichiestaFindUniqueOrThrowArgs} args - Arguments to find a Richiesta
     * @example
     * // Get one Richiesta
     * const richiesta = await prisma.richiesta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RichiestaFindUniqueOrThrowArgs>(args: SelectSubset<T, RichiestaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Richiesta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichiestaFindFirstArgs} args - Arguments to find a Richiesta
     * @example
     * // Get one Richiesta
     * const richiesta = await prisma.richiesta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RichiestaFindFirstArgs>(args?: SelectSubset<T, RichiestaFindFirstArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Richiesta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichiestaFindFirstOrThrowArgs} args - Arguments to find a Richiesta
     * @example
     * // Get one Richiesta
     * const richiesta = await prisma.richiesta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RichiestaFindFirstOrThrowArgs>(args?: SelectSubset<T, RichiestaFindFirstOrThrowArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Richiestas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichiestaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Richiestas
     * const richiestas = await prisma.richiesta.findMany()
     * 
     * // Get first 10 Richiestas
     * const richiestas = await prisma.richiesta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const richiestaWithIdOnly = await prisma.richiesta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RichiestaFindManyArgs>(args?: SelectSubset<T, RichiestaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Richiesta.
     * @param {RichiestaCreateArgs} args - Arguments to create a Richiesta.
     * @example
     * // Create one Richiesta
     * const Richiesta = await prisma.richiesta.create({
     *   data: {
     *     // ... data to create a Richiesta
     *   }
     * })
     * 
     */
    create<T extends RichiestaCreateArgs>(args: SelectSubset<T, RichiestaCreateArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Richiestas.
     * @param {RichiestaCreateManyArgs} args - Arguments to create many Richiestas.
     * @example
     * // Create many Richiestas
     * const richiesta = await prisma.richiesta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RichiestaCreateManyArgs>(args?: SelectSubset<T, RichiestaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Richiesta.
     * @param {RichiestaDeleteArgs} args - Arguments to delete one Richiesta.
     * @example
     * // Delete one Richiesta
     * const Richiesta = await prisma.richiesta.delete({
     *   where: {
     *     // ... filter to delete one Richiesta
     *   }
     * })
     * 
     */
    delete<T extends RichiestaDeleteArgs>(args: SelectSubset<T, RichiestaDeleteArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Richiesta.
     * @param {RichiestaUpdateArgs} args - Arguments to update one Richiesta.
     * @example
     * // Update one Richiesta
     * const richiesta = await prisma.richiesta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RichiestaUpdateArgs>(args: SelectSubset<T, RichiestaUpdateArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Richiestas.
     * @param {RichiestaDeleteManyArgs} args - Arguments to filter Richiestas to delete.
     * @example
     * // Delete a few Richiestas
     * const { count } = await prisma.richiesta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RichiestaDeleteManyArgs>(args?: SelectSubset<T, RichiestaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Richiestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichiestaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Richiestas
     * const richiesta = await prisma.richiesta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RichiestaUpdateManyArgs>(args: SelectSubset<T, RichiestaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Richiesta.
     * @param {RichiestaUpsertArgs} args - Arguments to update or create a Richiesta.
     * @example
     * // Update or create a Richiesta
     * const richiesta = await prisma.richiesta.upsert({
     *   create: {
     *     // ... data to create a Richiesta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Richiesta we want to update
     *   }
     * })
     */
    upsert<T extends RichiestaUpsertArgs>(args: SelectSubset<T, RichiestaUpsertArgs<ExtArgs>>): Prisma__RichiestaClient<$Result.GetResult<Prisma.$RichiestaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Richiestas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichiestaCountArgs} args - Arguments to filter Richiestas to count.
     * @example
     * // Count the number of Richiestas
     * const count = await prisma.richiesta.count({
     *   where: {
     *     // ... the filter for the Richiestas we want to count
     *   }
     * })
    **/
    count<T extends RichiestaCountArgs>(
      args?: Subset<T, RichiestaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RichiestaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Richiesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichiestaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RichiestaAggregateArgs>(args: Subset<T, RichiestaAggregateArgs>): Prisma.PrismaPromise<GetRichiestaAggregateType<T>>

    /**
     * Group by Richiesta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RichiestaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RichiestaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RichiestaGroupByArgs['orderBy'] }
        : { orderBy?: RichiestaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RichiestaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRichiestaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Richiesta model
   */
  readonly fields: RichiestaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Richiesta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RichiestaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servizio<T extends ServizioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServizioDefaultArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Richiesta model
   */
  interface RichiestaFieldRefs {
    readonly id: FieldRef<"Richiesta", 'String'>
    readonly nome: FieldRef<"Richiesta", 'String'>
    readonly cognome: FieldRef<"Richiesta", 'String'>
    readonly email: FieldRef<"Richiesta", 'String'>
    readonly telefono: FieldRef<"Richiesta", 'String'>
    readonly note: FieldRef<"Richiesta", 'String'>
    readonly servizioId: FieldRef<"Richiesta", 'String'>
    readonly stato: FieldRef<"Richiesta", 'StatoRichiesta'>
    readonly pdfGenerato: FieldRef<"Richiesta", 'Boolean'>
    readonly urlPdf: FieldRef<"Richiesta", 'String'>
    readonly dataPreferita: FieldRef<"Richiesta", 'DateTime'>
    readonly oraPreferita: FieldRef<"Richiesta", 'DateTime'>
    readonly createdAt: FieldRef<"Richiesta", 'DateTime'>
    readonly updatedAt: FieldRef<"Richiesta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Richiesta findUnique
   */
  export type RichiestaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * Filter, which Richiesta to fetch.
     */
    where: RichiestaWhereUniqueInput
  }

  /**
   * Richiesta findUniqueOrThrow
   */
  export type RichiestaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * Filter, which Richiesta to fetch.
     */
    where: RichiestaWhereUniqueInput
  }

  /**
   * Richiesta findFirst
   */
  export type RichiestaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * Filter, which Richiesta to fetch.
     */
    where?: RichiestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Richiestas to fetch.
     */
    orderBy?: RichiestaOrderByWithRelationInput | RichiestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Richiestas.
     */
    cursor?: RichiestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Richiestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Richiestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Richiestas.
     */
    distinct?: RichiestaScalarFieldEnum | RichiestaScalarFieldEnum[]
  }

  /**
   * Richiesta findFirstOrThrow
   */
  export type RichiestaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * Filter, which Richiesta to fetch.
     */
    where?: RichiestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Richiestas to fetch.
     */
    orderBy?: RichiestaOrderByWithRelationInput | RichiestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Richiestas.
     */
    cursor?: RichiestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Richiestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Richiestas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Richiestas.
     */
    distinct?: RichiestaScalarFieldEnum | RichiestaScalarFieldEnum[]
  }

  /**
   * Richiesta findMany
   */
  export type RichiestaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * Filter, which Richiestas to fetch.
     */
    where?: RichiestaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Richiestas to fetch.
     */
    orderBy?: RichiestaOrderByWithRelationInput | RichiestaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Richiestas.
     */
    cursor?: RichiestaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Richiestas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Richiestas.
     */
    skip?: number
    distinct?: RichiestaScalarFieldEnum | RichiestaScalarFieldEnum[]
  }

  /**
   * Richiesta create
   */
  export type RichiestaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * The data needed to create a Richiesta.
     */
    data: XOR<RichiestaCreateInput, RichiestaUncheckedCreateInput>
  }

  /**
   * Richiesta createMany
   */
  export type RichiestaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Richiestas.
     */
    data: RichiestaCreateManyInput | RichiestaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Richiesta update
   */
  export type RichiestaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * The data needed to update a Richiesta.
     */
    data: XOR<RichiestaUpdateInput, RichiestaUncheckedUpdateInput>
    /**
     * Choose, which Richiesta to update.
     */
    where: RichiestaWhereUniqueInput
  }

  /**
   * Richiesta updateMany
   */
  export type RichiestaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Richiestas.
     */
    data: XOR<RichiestaUpdateManyMutationInput, RichiestaUncheckedUpdateManyInput>
    /**
     * Filter which Richiestas to update
     */
    where?: RichiestaWhereInput
    /**
     * Limit how many Richiestas to update.
     */
    limit?: number
  }

  /**
   * Richiesta upsert
   */
  export type RichiestaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * The filter to search for the Richiesta to update in case it exists.
     */
    where: RichiestaWhereUniqueInput
    /**
     * In case the Richiesta found by the `where` argument doesn't exist, create a new Richiesta with this data.
     */
    create: XOR<RichiestaCreateInput, RichiestaUncheckedCreateInput>
    /**
     * In case the Richiesta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RichiestaUpdateInput, RichiestaUncheckedUpdateInput>
  }

  /**
   * Richiesta delete
   */
  export type RichiestaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
    /**
     * Filter which Richiesta to delete.
     */
    where: RichiestaWhereUniqueInput
  }

  /**
   * Richiesta deleteMany
   */
  export type RichiestaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Richiestas to delete
     */
    where?: RichiestaWhereInput
    /**
     * Limit how many Richiestas to delete.
     */
    limit?: number
  }

  /**
   * Richiesta without action
   */
  export type RichiestaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Richiesta
     */
    select?: RichiestaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Richiesta
     */
    omit?: RichiestaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RichiestaInclude<ExtArgs> | null
  }


  /**
   * Model Appuntamento
   */

  export type AggregateAppuntamento = {
    _count: AppuntamentoCountAggregateOutputType | null
    _avg: AppuntamentoAvgAggregateOutputType | null
    _sum: AppuntamentoSumAggregateOutputType | null
    _min: AppuntamentoMinAggregateOutputType | null
    _max: AppuntamentoMaxAggregateOutputType | null
  }

  export type AppuntamentoAvgAggregateOutputType = {
    durata: number | null
  }

  export type AppuntamentoSumAggregateOutputType = {
    durata: number | null
  }

  export type AppuntamentoMinAggregateOutputType = {
    id: string | null
    data: Date | null
    ora: Date | null
    durata: number | null
    clienteId: string | null
    servizioId: string | null
    note: string | null
    stato: $Enums.StatoAppuntamento | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppuntamentoMaxAggregateOutputType = {
    id: string | null
    data: Date | null
    ora: Date | null
    durata: number | null
    clienteId: string | null
    servizioId: string | null
    note: string | null
    stato: $Enums.StatoAppuntamento | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppuntamentoCountAggregateOutputType = {
    id: number
    data: number
    ora: number
    durata: number
    clienteId: number
    servizioId: number
    note: number
    stato: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppuntamentoAvgAggregateInputType = {
    durata?: true
  }

  export type AppuntamentoSumAggregateInputType = {
    durata?: true
  }

  export type AppuntamentoMinAggregateInputType = {
    id?: true
    data?: true
    ora?: true
    durata?: true
    clienteId?: true
    servizioId?: true
    note?: true
    stato?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppuntamentoMaxAggregateInputType = {
    id?: true
    data?: true
    ora?: true
    durata?: true
    clienteId?: true
    servizioId?: true
    note?: true
    stato?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppuntamentoCountAggregateInputType = {
    id?: true
    data?: true
    ora?: true
    durata?: true
    clienteId?: true
    servizioId?: true
    note?: true
    stato?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppuntamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appuntamento to aggregate.
     */
    where?: AppuntamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appuntamentos to fetch.
     */
    orderBy?: AppuntamentoOrderByWithRelationInput | AppuntamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppuntamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appuntamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appuntamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appuntamentos
    **/
    _count?: true | AppuntamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppuntamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppuntamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppuntamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppuntamentoMaxAggregateInputType
  }

  export type GetAppuntamentoAggregateType<T extends AppuntamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAppuntamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppuntamento[P]>
      : GetScalarType<T[P], AggregateAppuntamento[P]>
  }




  export type AppuntamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppuntamentoWhereInput
    orderBy?: AppuntamentoOrderByWithAggregationInput | AppuntamentoOrderByWithAggregationInput[]
    by: AppuntamentoScalarFieldEnum[] | AppuntamentoScalarFieldEnum
    having?: AppuntamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppuntamentoCountAggregateInputType | true
    _avg?: AppuntamentoAvgAggregateInputType
    _sum?: AppuntamentoSumAggregateInputType
    _min?: AppuntamentoMinAggregateInputType
    _max?: AppuntamentoMaxAggregateInputType
  }

  export type AppuntamentoGroupByOutputType = {
    id: string
    data: Date
    ora: Date
    durata: number
    clienteId: string
    servizioId: string
    note: string | null
    stato: $Enums.StatoAppuntamento
    createdAt: Date
    updatedAt: Date
    _count: AppuntamentoCountAggregateOutputType | null
    _avg: AppuntamentoAvgAggregateOutputType | null
    _sum: AppuntamentoSumAggregateOutputType | null
    _min: AppuntamentoMinAggregateOutputType | null
    _max: AppuntamentoMaxAggregateOutputType | null
  }

  type GetAppuntamentoGroupByPayload<T extends AppuntamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppuntamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppuntamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppuntamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AppuntamentoGroupByOutputType[P]>
        }
      >
    >


  export type AppuntamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    ora?: boolean
    durata?: boolean
    clienteId?: boolean
    servizioId?: boolean
    note?: boolean
    stato?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    servizio?: boolean | ServizioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appuntamento"]>



  export type AppuntamentoSelectScalar = {
    id?: boolean
    data?: boolean
    ora?: boolean
    durata?: boolean
    clienteId?: boolean
    servizioId?: boolean
    note?: boolean
    stato?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppuntamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "ora" | "durata" | "clienteId" | "servizioId" | "note" | "stato" | "createdAt" | "updatedAt", ExtArgs["result"]["appuntamento"]>
  export type AppuntamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    servizio?: boolean | ServizioDefaultArgs<ExtArgs>
  }

  export type $AppuntamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appuntamento"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      servizio: Prisma.$ServizioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      data: Date
      ora: Date
      durata: number
      clienteId: string
      servizioId: string
      note: string | null
      stato: $Enums.StatoAppuntamento
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appuntamento"]>
    composites: {}
  }

  type AppuntamentoGetPayload<S extends boolean | null | undefined | AppuntamentoDefaultArgs> = $Result.GetResult<Prisma.$AppuntamentoPayload, S>

  type AppuntamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppuntamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppuntamentoCountAggregateInputType | true
    }

  export interface AppuntamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appuntamento'], meta: { name: 'Appuntamento' } }
    /**
     * Find zero or one Appuntamento that matches the filter.
     * @param {AppuntamentoFindUniqueArgs} args - Arguments to find a Appuntamento
     * @example
     * // Get one Appuntamento
     * const appuntamento = await prisma.appuntamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppuntamentoFindUniqueArgs>(args: SelectSubset<T, AppuntamentoFindUniqueArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appuntamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppuntamentoFindUniqueOrThrowArgs} args - Arguments to find a Appuntamento
     * @example
     * // Get one Appuntamento
     * const appuntamento = await prisma.appuntamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppuntamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AppuntamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appuntamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppuntamentoFindFirstArgs} args - Arguments to find a Appuntamento
     * @example
     * // Get one Appuntamento
     * const appuntamento = await prisma.appuntamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppuntamentoFindFirstArgs>(args?: SelectSubset<T, AppuntamentoFindFirstArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appuntamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppuntamentoFindFirstOrThrowArgs} args - Arguments to find a Appuntamento
     * @example
     * // Get one Appuntamento
     * const appuntamento = await prisma.appuntamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppuntamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AppuntamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appuntamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppuntamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appuntamentos
     * const appuntamentos = await prisma.appuntamento.findMany()
     * 
     * // Get first 10 Appuntamentos
     * const appuntamentos = await prisma.appuntamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appuntamentoWithIdOnly = await prisma.appuntamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppuntamentoFindManyArgs>(args?: SelectSubset<T, AppuntamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appuntamento.
     * @param {AppuntamentoCreateArgs} args - Arguments to create a Appuntamento.
     * @example
     * // Create one Appuntamento
     * const Appuntamento = await prisma.appuntamento.create({
     *   data: {
     *     // ... data to create a Appuntamento
     *   }
     * })
     * 
     */
    create<T extends AppuntamentoCreateArgs>(args: SelectSubset<T, AppuntamentoCreateArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appuntamentos.
     * @param {AppuntamentoCreateManyArgs} args - Arguments to create many Appuntamentos.
     * @example
     * // Create many Appuntamentos
     * const appuntamento = await prisma.appuntamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppuntamentoCreateManyArgs>(args?: SelectSubset<T, AppuntamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appuntamento.
     * @param {AppuntamentoDeleteArgs} args - Arguments to delete one Appuntamento.
     * @example
     * // Delete one Appuntamento
     * const Appuntamento = await prisma.appuntamento.delete({
     *   where: {
     *     // ... filter to delete one Appuntamento
     *   }
     * })
     * 
     */
    delete<T extends AppuntamentoDeleteArgs>(args: SelectSubset<T, AppuntamentoDeleteArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appuntamento.
     * @param {AppuntamentoUpdateArgs} args - Arguments to update one Appuntamento.
     * @example
     * // Update one Appuntamento
     * const appuntamento = await prisma.appuntamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppuntamentoUpdateArgs>(args: SelectSubset<T, AppuntamentoUpdateArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appuntamentos.
     * @param {AppuntamentoDeleteManyArgs} args - Arguments to filter Appuntamentos to delete.
     * @example
     * // Delete a few Appuntamentos
     * const { count } = await prisma.appuntamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppuntamentoDeleteManyArgs>(args?: SelectSubset<T, AppuntamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appuntamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppuntamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appuntamentos
     * const appuntamento = await prisma.appuntamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppuntamentoUpdateManyArgs>(args: SelectSubset<T, AppuntamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appuntamento.
     * @param {AppuntamentoUpsertArgs} args - Arguments to update or create a Appuntamento.
     * @example
     * // Update or create a Appuntamento
     * const appuntamento = await prisma.appuntamento.upsert({
     *   create: {
     *     // ... data to create a Appuntamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appuntamento we want to update
     *   }
     * })
     */
    upsert<T extends AppuntamentoUpsertArgs>(args: SelectSubset<T, AppuntamentoUpsertArgs<ExtArgs>>): Prisma__AppuntamentoClient<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appuntamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppuntamentoCountArgs} args - Arguments to filter Appuntamentos to count.
     * @example
     * // Count the number of Appuntamentos
     * const count = await prisma.appuntamento.count({
     *   where: {
     *     // ... the filter for the Appuntamentos we want to count
     *   }
     * })
    **/
    count<T extends AppuntamentoCountArgs>(
      args?: Subset<T, AppuntamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppuntamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appuntamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppuntamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppuntamentoAggregateArgs>(args: Subset<T, AppuntamentoAggregateArgs>): Prisma.PrismaPromise<GetAppuntamentoAggregateType<T>>

    /**
     * Group by Appuntamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppuntamentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppuntamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppuntamentoGroupByArgs['orderBy'] }
        : { orderBy?: AppuntamentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppuntamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppuntamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appuntamento model
   */
  readonly fields: AppuntamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appuntamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppuntamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servizio<T extends ServizioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServizioDefaultArgs<ExtArgs>>): Prisma__ServizioClient<$Result.GetResult<Prisma.$ServizioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appuntamento model
   */
  interface AppuntamentoFieldRefs {
    readonly id: FieldRef<"Appuntamento", 'String'>
    readonly data: FieldRef<"Appuntamento", 'DateTime'>
    readonly ora: FieldRef<"Appuntamento", 'DateTime'>
    readonly durata: FieldRef<"Appuntamento", 'Int'>
    readonly clienteId: FieldRef<"Appuntamento", 'String'>
    readonly servizioId: FieldRef<"Appuntamento", 'String'>
    readonly note: FieldRef<"Appuntamento", 'String'>
    readonly stato: FieldRef<"Appuntamento", 'StatoAppuntamento'>
    readonly createdAt: FieldRef<"Appuntamento", 'DateTime'>
    readonly updatedAt: FieldRef<"Appuntamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appuntamento findUnique
   */
  export type AppuntamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * Filter, which Appuntamento to fetch.
     */
    where: AppuntamentoWhereUniqueInput
  }

  /**
   * Appuntamento findUniqueOrThrow
   */
  export type AppuntamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * Filter, which Appuntamento to fetch.
     */
    where: AppuntamentoWhereUniqueInput
  }

  /**
   * Appuntamento findFirst
   */
  export type AppuntamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * Filter, which Appuntamento to fetch.
     */
    where?: AppuntamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appuntamentos to fetch.
     */
    orderBy?: AppuntamentoOrderByWithRelationInput | AppuntamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appuntamentos.
     */
    cursor?: AppuntamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appuntamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appuntamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appuntamentos.
     */
    distinct?: AppuntamentoScalarFieldEnum | AppuntamentoScalarFieldEnum[]
  }

  /**
   * Appuntamento findFirstOrThrow
   */
  export type AppuntamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * Filter, which Appuntamento to fetch.
     */
    where?: AppuntamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appuntamentos to fetch.
     */
    orderBy?: AppuntamentoOrderByWithRelationInput | AppuntamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appuntamentos.
     */
    cursor?: AppuntamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appuntamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appuntamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appuntamentos.
     */
    distinct?: AppuntamentoScalarFieldEnum | AppuntamentoScalarFieldEnum[]
  }

  /**
   * Appuntamento findMany
   */
  export type AppuntamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * Filter, which Appuntamentos to fetch.
     */
    where?: AppuntamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appuntamentos to fetch.
     */
    orderBy?: AppuntamentoOrderByWithRelationInput | AppuntamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appuntamentos.
     */
    cursor?: AppuntamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appuntamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appuntamentos.
     */
    skip?: number
    distinct?: AppuntamentoScalarFieldEnum | AppuntamentoScalarFieldEnum[]
  }

  /**
   * Appuntamento create
   */
  export type AppuntamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Appuntamento.
     */
    data: XOR<AppuntamentoCreateInput, AppuntamentoUncheckedCreateInput>
  }

  /**
   * Appuntamento createMany
   */
  export type AppuntamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appuntamentos.
     */
    data: AppuntamentoCreateManyInput | AppuntamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appuntamento update
   */
  export type AppuntamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Appuntamento.
     */
    data: XOR<AppuntamentoUpdateInput, AppuntamentoUncheckedUpdateInput>
    /**
     * Choose, which Appuntamento to update.
     */
    where: AppuntamentoWhereUniqueInput
  }

  /**
   * Appuntamento updateMany
   */
  export type AppuntamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appuntamentos.
     */
    data: XOR<AppuntamentoUpdateManyMutationInput, AppuntamentoUncheckedUpdateManyInput>
    /**
     * Filter which Appuntamentos to update
     */
    where?: AppuntamentoWhereInput
    /**
     * Limit how many Appuntamentos to update.
     */
    limit?: number
  }

  /**
   * Appuntamento upsert
   */
  export type AppuntamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Appuntamento to update in case it exists.
     */
    where: AppuntamentoWhereUniqueInput
    /**
     * In case the Appuntamento found by the `where` argument doesn't exist, create a new Appuntamento with this data.
     */
    create: XOR<AppuntamentoCreateInput, AppuntamentoUncheckedCreateInput>
    /**
     * In case the Appuntamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppuntamentoUpdateInput, AppuntamentoUncheckedUpdateInput>
  }

  /**
   * Appuntamento delete
   */
  export type AppuntamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    /**
     * Filter which Appuntamento to delete.
     */
    where: AppuntamentoWhereUniqueInput
  }

  /**
   * Appuntamento deleteMany
   */
  export type AppuntamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appuntamentos to delete
     */
    where?: AppuntamentoWhereInput
    /**
     * Limit how many Appuntamentos to delete.
     */
    limit?: number
  }

  /**
   * Appuntamento without action
   */
  export type AppuntamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteMinAggregateOutputType = {
    id: string | null
    nome: string | null
    cognome: string | null
    email: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    cognome: string | null
    email: string | null
    telefono: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    cognome: number
    email: number
    telefono: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    cognome?: true
    email?: true
    telefono?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt: Date
    updatedAt: Date
    _count: ClienteCountAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cognome?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    veicoli?: boolean | Cliente$veicoliArgs<ExtArgs>
    appuntamenti?: boolean | Cliente$appuntamentiArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    cognome?: boolean
    email?: boolean
    telefono?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cognome" | "email" | "telefono" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veicoli?: boolean | Cliente$veicoliArgs<ExtArgs>
    appuntamenti?: boolean | Cliente$appuntamentiArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      veicoli: Prisma.$VeicoloPayload<ExtArgs>[]
      appuntamenti: Prisma.$AppuntamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      cognome: string
      email: string
      telefono: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veicoli<T extends Cliente$veicoliArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$veicoliArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appuntamenti<T extends Cliente$appuntamentiArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$appuntamentiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppuntamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly cognome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.veicoli
   */
  export type Cliente$veicoliArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    where?: VeicoloWhereInput
    orderBy?: VeicoloOrderByWithRelationInput | VeicoloOrderByWithRelationInput[]
    cursor?: VeicoloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeicoloScalarFieldEnum | VeicoloScalarFieldEnum[]
  }

  /**
   * Cliente.appuntamenti
   */
  export type Cliente$appuntamentiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appuntamento
     */
    select?: AppuntamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appuntamento
     */
    omit?: AppuntamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppuntamentoInclude<ExtArgs> | null
    where?: AppuntamentoWhereInput
    orderBy?: AppuntamentoOrderByWithRelationInput | AppuntamentoOrderByWithRelationInput[]
    cursor?: AppuntamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppuntamentoScalarFieldEnum | AppuntamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Veicolo
   */

  export type AggregateVeicolo = {
    _count: VeicoloCountAggregateOutputType | null
    _avg: VeicoloAvgAggregateOutputType | null
    _sum: VeicoloSumAggregateOutputType | null
    _min: VeicoloMinAggregateOutputType | null
    _max: VeicoloMaxAggregateOutputType | null
  }

  export type VeicoloAvgAggregateOutputType = {
    anno: number | null
  }

  export type VeicoloSumAggregateOutputType = {
    anno: number | null
  }

  export type VeicoloMinAggregateOutputType = {
    id: string | null
    targa: string | null
    marca: string | null
    modello: string | null
    anno: number | null
    clienteId: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeicoloMaxAggregateOutputType = {
    id: string | null
    targa: string | null
    marca: string | null
    modello: string | null
    anno: number | null
    clienteId: string | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeicoloCountAggregateOutputType = {
    id: number
    targa: number
    marca: number
    modello: number
    anno: number
    clienteId: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VeicoloAvgAggregateInputType = {
    anno?: true
  }

  export type VeicoloSumAggregateInputType = {
    anno?: true
  }

  export type VeicoloMinAggregateInputType = {
    id?: true
    targa?: true
    marca?: true
    modello?: true
    anno?: true
    clienteId?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeicoloMaxAggregateInputType = {
    id?: true
    targa?: true
    marca?: true
    modello?: true
    anno?: true
    clienteId?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeicoloCountAggregateInputType = {
    id?: true
    targa?: true
    marca?: true
    modello?: true
    anno?: true
    clienteId?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VeicoloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veicolo to aggregate.
     */
    where?: VeicoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veicolos to fetch.
     */
    orderBy?: VeicoloOrderByWithRelationInput | VeicoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeicoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veicolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veicolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veicolos
    **/
    _count?: true | VeicoloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeicoloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeicoloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeicoloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeicoloMaxAggregateInputType
  }

  export type GetVeicoloAggregateType<T extends VeicoloAggregateArgs> = {
        [P in keyof T & keyof AggregateVeicolo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeicolo[P]>
      : GetScalarType<T[P], AggregateVeicolo[P]>
  }




  export type VeicoloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeicoloWhereInput
    orderBy?: VeicoloOrderByWithAggregationInput | VeicoloOrderByWithAggregationInput[]
    by: VeicoloScalarFieldEnum[] | VeicoloScalarFieldEnum
    having?: VeicoloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeicoloCountAggregateInputType | true
    _avg?: VeicoloAvgAggregateInputType
    _sum?: VeicoloSumAggregateInputType
    _min?: VeicoloMinAggregateInputType
    _max?: VeicoloMaxAggregateInputType
  }

  export type VeicoloGroupByOutputType = {
    id: string
    targa: string
    marca: string
    modello: string
    anno: number | null
    clienteId: string
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: VeicoloCountAggregateOutputType | null
    _avg: VeicoloAvgAggregateOutputType | null
    _sum: VeicoloSumAggregateOutputType | null
    _min: VeicoloMinAggregateOutputType | null
    _max: VeicoloMaxAggregateOutputType | null
  }

  type GetVeicoloGroupByPayload<T extends VeicoloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeicoloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeicoloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeicoloGroupByOutputType[P]>
            : GetScalarType<T[P], VeicoloGroupByOutputType[P]>
        }
      >
    >


  export type VeicoloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    targa?: boolean
    marca?: boolean
    modello?: boolean
    anno?: boolean
    clienteId?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veicolo"]>



  export type VeicoloSelectScalar = {
    id?: boolean
    targa?: boolean
    marca?: boolean
    modello?: boolean
    anno?: boolean
    clienteId?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VeicoloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "targa" | "marca" | "modello" | "anno" | "clienteId" | "note" | "createdAt" | "updatedAt", ExtArgs["result"]["veicolo"]>
  export type VeicoloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $VeicoloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veicolo"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      targa: string
      marca: string
      modello: string
      anno: number | null
      clienteId: string
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["veicolo"]>
    composites: {}
  }

  type VeicoloGetPayload<S extends boolean | null | undefined | VeicoloDefaultArgs> = $Result.GetResult<Prisma.$VeicoloPayload, S>

  type VeicoloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeicoloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeicoloCountAggregateInputType | true
    }

  export interface VeicoloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veicolo'], meta: { name: 'Veicolo' } }
    /**
     * Find zero or one Veicolo that matches the filter.
     * @param {VeicoloFindUniqueArgs} args - Arguments to find a Veicolo
     * @example
     * // Get one Veicolo
     * const veicolo = await prisma.veicolo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeicoloFindUniqueArgs>(args: SelectSubset<T, VeicoloFindUniqueArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veicolo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeicoloFindUniqueOrThrowArgs} args - Arguments to find a Veicolo
     * @example
     * // Get one Veicolo
     * const veicolo = await prisma.veicolo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeicoloFindUniqueOrThrowArgs>(args: SelectSubset<T, VeicoloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veicolo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicoloFindFirstArgs} args - Arguments to find a Veicolo
     * @example
     * // Get one Veicolo
     * const veicolo = await prisma.veicolo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeicoloFindFirstArgs>(args?: SelectSubset<T, VeicoloFindFirstArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veicolo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicoloFindFirstOrThrowArgs} args - Arguments to find a Veicolo
     * @example
     * // Get one Veicolo
     * const veicolo = await prisma.veicolo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeicoloFindFirstOrThrowArgs>(args?: SelectSubset<T, VeicoloFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veicolos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicoloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veicolos
     * const veicolos = await prisma.veicolo.findMany()
     * 
     * // Get first 10 Veicolos
     * const veicolos = await prisma.veicolo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veicoloWithIdOnly = await prisma.veicolo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeicoloFindManyArgs>(args?: SelectSubset<T, VeicoloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veicolo.
     * @param {VeicoloCreateArgs} args - Arguments to create a Veicolo.
     * @example
     * // Create one Veicolo
     * const Veicolo = await prisma.veicolo.create({
     *   data: {
     *     // ... data to create a Veicolo
     *   }
     * })
     * 
     */
    create<T extends VeicoloCreateArgs>(args: SelectSubset<T, VeicoloCreateArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veicolos.
     * @param {VeicoloCreateManyArgs} args - Arguments to create many Veicolos.
     * @example
     * // Create many Veicolos
     * const veicolo = await prisma.veicolo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeicoloCreateManyArgs>(args?: SelectSubset<T, VeicoloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Veicolo.
     * @param {VeicoloDeleteArgs} args - Arguments to delete one Veicolo.
     * @example
     * // Delete one Veicolo
     * const Veicolo = await prisma.veicolo.delete({
     *   where: {
     *     // ... filter to delete one Veicolo
     *   }
     * })
     * 
     */
    delete<T extends VeicoloDeleteArgs>(args: SelectSubset<T, VeicoloDeleteArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veicolo.
     * @param {VeicoloUpdateArgs} args - Arguments to update one Veicolo.
     * @example
     * // Update one Veicolo
     * const veicolo = await prisma.veicolo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeicoloUpdateArgs>(args: SelectSubset<T, VeicoloUpdateArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veicolos.
     * @param {VeicoloDeleteManyArgs} args - Arguments to filter Veicolos to delete.
     * @example
     * // Delete a few Veicolos
     * const { count } = await prisma.veicolo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeicoloDeleteManyArgs>(args?: SelectSubset<T, VeicoloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veicolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicoloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veicolos
     * const veicolo = await prisma.veicolo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeicoloUpdateManyArgs>(args: SelectSubset<T, VeicoloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Veicolo.
     * @param {VeicoloUpsertArgs} args - Arguments to update or create a Veicolo.
     * @example
     * // Update or create a Veicolo
     * const veicolo = await prisma.veicolo.upsert({
     *   create: {
     *     // ... data to create a Veicolo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veicolo we want to update
     *   }
     * })
     */
    upsert<T extends VeicoloUpsertArgs>(args: SelectSubset<T, VeicoloUpsertArgs<ExtArgs>>): Prisma__VeicoloClient<$Result.GetResult<Prisma.$VeicoloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veicolos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicoloCountArgs} args - Arguments to filter Veicolos to count.
     * @example
     * // Count the number of Veicolos
     * const count = await prisma.veicolo.count({
     *   where: {
     *     // ... the filter for the Veicolos we want to count
     *   }
     * })
    **/
    count<T extends VeicoloCountArgs>(
      args?: Subset<T, VeicoloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeicoloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veicolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicoloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VeicoloAggregateArgs>(args: Subset<T, VeicoloAggregateArgs>): Prisma.PrismaPromise<GetVeicoloAggregateType<T>>

    /**
     * Group by Veicolo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeicoloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VeicoloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeicoloGroupByArgs['orderBy'] }
        : { orderBy?: VeicoloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VeicoloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeicoloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veicolo model
   */
  readonly fields: VeicoloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veicolo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeicoloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Veicolo model
   */
  interface VeicoloFieldRefs {
    readonly id: FieldRef<"Veicolo", 'String'>
    readonly targa: FieldRef<"Veicolo", 'String'>
    readonly marca: FieldRef<"Veicolo", 'String'>
    readonly modello: FieldRef<"Veicolo", 'String'>
    readonly anno: FieldRef<"Veicolo", 'Int'>
    readonly clienteId: FieldRef<"Veicolo", 'String'>
    readonly note: FieldRef<"Veicolo", 'String'>
    readonly createdAt: FieldRef<"Veicolo", 'DateTime'>
    readonly updatedAt: FieldRef<"Veicolo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Veicolo findUnique
   */
  export type VeicoloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * Filter, which Veicolo to fetch.
     */
    where: VeicoloWhereUniqueInput
  }

  /**
   * Veicolo findUniqueOrThrow
   */
  export type VeicoloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * Filter, which Veicolo to fetch.
     */
    where: VeicoloWhereUniqueInput
  }

  /**
   * Veicolo findFirst
   */
  export type VeicoloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * Filter, which Veicolo to fetch.
     */
    where?: VeicoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veicolos to fetch.
     */
    orderBy?: VeicoloOrderByWithRelationInput | VeicoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veicolos.
     */
    cursor?: VeicoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veicolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veicolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veicolos.
     */
    distinct?: VeicoloScalarFieldEnum | VeicoloScalarFieldEnum[]
  }

  /**
   * Veicolo findFirstOrThrow
   */
  export type VeicoloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * Filter, which Veicolo to fetch.
     */
    where?: VeicoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veicolos to fetch.
     */
    orderBy?: VeicoloOrderByWithRelationInput | VeicoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veicolos.
     */
    cursor?: VeicoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veicolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veicolos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veicolos.
     */
    distinct?: VeicoloScalarFieldEnum | VeicoloScalarFieldEnum[]
  }

  /**
   * Veicolo findMany
   */
  export type VeicoloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * Filter, which Veicolos to fetch.
     */
    where?: VeicoloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veicolos to fetch.
     */
    orderBy?: VeicoloOrderByWithRelationInput | VeicoloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veicolos.
     */
    cursor?: VeicoloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veicolos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veicolos.
     */
    skip?: number
    distinct?: VeicoloScalarFieldEnum | VeicoloScalarFieldEnum[]
  }

  /**
   * Veicolo create
   */
  export type VeicoloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * The data needed to create a Veicolo.
     */
    data: XOR<VeicoloCreateInput, VeicoloUncheckedCreateInput>
  }

  /**
   * Veicolo createMany
   */
  export type VeicoloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veicolos.
     */
    data: VeicoloCreateManyInput | VeicoloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veicolo update
   */
  export type VeicoloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * The data needed to update a Veicolo.
     */
    data: XOR<VeicoloUpdateInput, VeicoloUncheckedUpdateInput>
    /**
     * Choose, which Veicolo to update.
     */
    where: VeicoloWhereUniqueInput
  }

  /**
   * Veicolo updateMany
   */
  export type VeicoloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veicolos.
     */
    data: XOR<VeicoloUpdateManyMutationInput, VeicoloUncheckedUpdateManyInput>
    /**
     * Filter which Veicolos to update
     */
    where?: VeicoloWhereInput
    /**
     * Limit how many Veicolos to update.
     */
    limit?: number
  }

  /**
   * Veicolo upsert
   */
  export type VeicoloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * The filter to search for the Veicolo to update in case it exists.
     */
    where: VeicoloWhereUniqueInput
    /**
     * In case the Veicolo found by the `where` argument doesn't exist, create a new Veicolo with this data.
     */
    create: XOR<VeicoloCreateInput, VeicoloUncheckedCreateInput>
    /**
     * In case the Veicolo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeicoloUpdateInput, VeicoloUncheckedUpdateInput>
  }

  /**
   * Veicolo delete
   */
  export type VeicoloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
    /**
     * Filter which Veicolo to delete.
     */
    where: VeicoloWhereUniqueInput
  }

  /**
   * Veicolo deleteMany
   */
  export type VeicoloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veicolos to delete
     */
    where?: VeicoloWhereInput
    /**
     * Limit how many Veicolos to delete.
     */
    limit?: number
  }

  /**
   * Veicolo without action
   */
  export type VeicoloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veicolo
     */
    select?: VeicoloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veicolo
     */
    omit?: VeicoloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeicoloInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ServizioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descrizione: 'descrizione',
    prezzo: 'prezzo',
    durata: 'durata',
    categoria: 'categoria',
    attivo: 'attivo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServizioScalarFieldEnum = (typeof ServizioScalarFieldEnum)[keyof typeof ServizioScalarFieldEnum]


  export const RichiestaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cognome: 'cognome',
    email: 'email',
    telefono: 'telefono',
    note: 'note',
    servizioId: 'servizioId',
    stato: 'stato',
    pdfGenerato: 'pdfGenerato',
    urlPdf: 'urlPdf',
    dataPreferita: 'dataPreferita',
    oraPreferita: 'oraPreferita',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RichiestaScalarFieldEnum = (typeof RichiestaScalarFieldEnum)[keyof typeof RichiestaScalarFieldEnum]


  export const AppuntamentoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    ora: 'ora',
    durata: 'durata',
    clienteId: 'clienteId',
    servizioId: 'servizioId',
    note: 'note',
    stato: 'stato',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppuntamentoScalarFieldEnum = (typeof AppuntamentoScalarFieldEnum)[keyof typeof AppuntamentoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cognome: 'cognome',
    email: 'email',
    telefono: 'telefono',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const VeicoloScalarFieldEnum: {
    id: 'id',
    targa: 'targa',
    marca: 'marca',
    modello: 'modello',
    anno: 'anno',
    clienteId: 'clienteId',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VeicoloScalarFieldEnum = (typeof VeicoloScalarFieldEnum)[keyof typeof VeicoloScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ServizioOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    descrizione: 'descrizione'
  };

  export type ServizioOrderByRelevanceFieldEnum = (typeof ServizioOrderByRelevanceFieldEnum)[keyof typeof ServizioOrderByRelevanceFieldEnum]


  export const RichiestaOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    cognome: 'cognome',
    email: 'email',
    telefono: 'telefono',
    note: 'note',
    servizioId: 'servizioId',
    urlPdf: 'urlPdf'
  };

  export type RichiestaOrderByRelevanceFieldEnum = (typeof RichiestaOrderByRelevanceFieldEnum)[keyof typeof RichiestaOrderByRelevanceFieldEnum]


  export const AppuntamentoOrderByRelevanceFieldEnum: {
    id: 'id',
    clienteId: 'clienteId',
    servizioId: 'servizioId',
    note: 'note'
  };

  export type AppuntamentoOrderByRelevanceFieldEnum = (typeof AppuntamentoOrderByRelevanceFieldEnum)[keyof typeof AppuntamentoOrderByRelevanceFieldEnum]


  export const ClienteOrderByRelevanceFieldEnum: {
    id: 'id',
    nome: 'nome',
    cognome: 'cognome',
    email: 'email',
    telefono: 'telefono'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const VeicoloOrderByRelevanceFieldEnum: {
    id: 'id',
    targa: 'targa',
    marca: 'marca',
    modello: 'modello',
    clienteId: 'clienteId',
    note: 'note'
  };

  export type VeicoloOrderByRelevanceFieldEnum = (typeof VeicoloOrderByRelevanceFieldEnum)[keyof typeof VeicoloOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'CategoriaServizio'
   */
  export type EnumCategoriaServizioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoriaServizio'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StatoRichiesta'
   */
  export type EnumStatoRichiestaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatoRichiesta'>
    


  /**
   * Reference to a field of type 'StatoAppuntamento'
   */
  export type EnumStatoAppuntamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatoAppuntamento'>
    
  /**
   * Deep Input Types
   */


  export type ServizioWhereInput = {
    AND?: ServizioWhereInput | ServizioWhereInput[]
    OR?: ServizioWhereInput[]
    NOT?: ServizioWhereInput | ServizioWhereInput[]
    id?: StringFilter<"Servizio"> | string
    nome?: StringFilter<"Servizio"> | string
    descrizione?: StringFilter<"Servizio"> | string
    prezzo?: FloatNullableFilter<"Servizio"> | number | null
    durata?: IntFilter<"Servizio"> | number
    categoria?: EnumCategoriaServizioFilter<"Servizio"> | $Enums.CategoriaServizio
    attivo?: BoolFilter<"Servizio"> | boolean
    createdAt?: DateTimeFilter<"Servizio"> | Date | string
    updatedAt?: DateTimeFilter<"Servizio"> | Date | string
    richieste?: RichiestaListRelationFilter
    appuntamenti?: AppuntamentoListRelationFilter
  }

  export type ServizioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descrizione?: SortOrder
    prezzo?: SortOrderInput | SortOrder
    durata?: SortOrder
    categoria?: SortOrder
    attivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    richieste?: RichiestaOrderByRelationAggregateInput
    appuntamenti?: AppuntamentoOrderByRelationAggregateInput
    _relevance?: ServizioOrderByRelevanceInput
  }

  export type ServizioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServizioWhereInput | ServizioWhereInput[]
    OR?: ServizioWhereInput[]
    NOT?: ServizioWhereInput | ServizioWhereInput[]
    nome?: StringFilter<"Servizio"> | string
    descrizione?: StringFilter<"Servizio"> | string
    prezzo?: FloatNullableFilter<"Servizio"> | number | null
    durata?: IntFilter<"Servizio"> | number
    categoria?: EnumCategoriaServizioFilter<"Servizio"> | $Enums.CategoriaServizio
    attivo?: BoolFilter<"Servizio"> | boolean
    createdAt?: DateTimeFilter<"Servizio"> | Date | string
    updatedAt?: DateTimeFilter<"Servizio"> | Date | string
    richieste?: RichiestaListRelationFilter
    appuntamenti?: AppuntamentoListRelationFilter
  }, "id">

  export type ServizioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descrizione?: SortOrder
    prezzo?: SortOrderInput | SortOrder
    durata?: SortOrder
    categoria?: SortOrder
    attivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServizioCountOrderByAggregateInput
    _avg?: ServizioAvgOrderByAggregateInput
    _max?: ServizioMaxOrderByAggregateInput
    _min?: ServizioMinOrderByAggregateInput
    _sum?: ServizioSumOrderByAggregateInput
  }

  export type ServizioScalarWhereWithAggregatesInput = {
    AND?: ServizioScalarWhereWithAggregatesInput | ServizioScalarWhereWithAggregatesInput[]
    OR?: ServizioScalarWhereWithAggregatesInput[]
    NOT?: ServizioScalarWhereWithAggregatesInput | ServizioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Servizio"> | string
    nome?: StringWithAggregatesFilter<"Servizio"> | string
    descrizione?: StringWithAggregatesFilter<"Servizio"> | string
    prezzo?: FloatNullableWithAggregatesFilter<"Servizio"> | number | null
    durata?: IntWithAggregatesFilter<"Servizio"> | number
    categoria?: EnumCategoriaServizioWithAggregatesFilter<"Servizio"> | $Enums.CategoriaServizio
    attivo?: BoolWithAggregatesFilter<"Servizio"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Servizio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Servizio"> | Date | string
  }

  export type RichiestaWhereInput = {
    AND?: RichiestaWhereInput | RichiestaWhereInput[]
    OR?: RichiestaWhereInput[]
    NOT?: RichiestaWhereInput | RichiestaWhereInput[]
    id?: StringFilter<"Richiesta"> | string
    nome?: StringFilter<"Richiesta"> | string
    cognome?: StringFilter<"Richiesta"> | string
    email?: StringFilter<"Richiesta"> | string
    telefono?: StringFilter<"Richiesta"> | string
    note?: StringNullableFilter<"Richiesta"> | string | null
    servizioId?: StringFilter<"Richiesta"> | string
    stato?: EnumStatoRichiestaFilter<"Richiesta"> | $Enums.StatoRichiesta
    pdfGenerato?: BoolFilter<"Richiesta"> | boolean
    urlPdf?: StringNullableFilter<"Richiesta"> | string | null
    dataPreferita?: DateTimeNullableFilter<"Richiesta"> | Date | string | null
    oraPreferita?: DateTimeNullableFilter<"Richiesta"> | Date | string | null
    createdAt?: DateTimeFilter<"Richiesta"> | Date | string
    updatedAt?: DateTimeFilter<"Richiesta"> | Date | string
    servizio?: XOR<ServizioScalarRelationFilter, ServizioWhereInput>
  }

  export type RichiestaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    note?: SortOrderInput | SortOrder
    servizioId?: SortOrder
    stato?: SortOrder
    pdfGenerato?: SortOrder
    urlPdf?: SortOrderInput | SortOrder
    dataPreferita?: SortOrderInput | SortOrder
    oraPreferita?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servizio?: ServizioOrderByWithRelationInput
    _relevance?: RichiestaOrderByRelevanceInput
  }

  export type RichiestaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RichiestaWhereInput | RichiestaWhereInput[]
    OR?: RichiestaWhereInput[]
    NOT?: RichiestaWhereInput | RichiestaWhereInput[]
    nome?: StringFilter<"Richiesta"> | string
    cognome?: StringFilter<"Richiesta"> | string
    email?: StringFilter<"Richiesta"> | string
    telefono?: StringFilter<"Richiesta"> | string
    note?: StringNullableFilter<"Richiesta"> | string | null
    servizioId?: StringFilter<"Richiesta"> | string
    stato?: EnumStatoRichiestaFilter<"Richiesta"> | $Enums.StatoRichiesta
    pdfGenerato?: BoolFilter<"Richiesta"> | boolean
    urlPdf?: StringNullableFilter<"Richiesta"> | string | null
    dataPreferita?: DateTimeNullableFilter<"Richiesta"> | Date | string | null
    oraPreferita?: DateTimeNullableFilter<"Richiesta"> | Date | string | null
    createdAt?: DateTimeFilter<"Richiesta"> | Date | string
    updatedAt?: DateTimeFilter<"Richiesta"> | Date | string
    servizio?: XOR<ServizioScalarRelationFilter, ServizioWhereInput>
  }, "id">

  export type RichiestaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    note?: SortOrderInput | SortOrder
    servizioId?: SortOrder
    stato?: SortOrder
    pdfGenerato?: SortOrder
    urlPdf?: SortOrderInput | SortOrder
    dataPreferita?: SortOrderInput | SortOrder
    oraPreferita?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RichiestaCountOrderByAggregateInput
    _max?: RichiestaMaxOrderByAggregateInput
    _min?: RichiestaMinOrderByAggregateInput
  }

  export type RichiestaScalarWhereWithAggregatesInput = {
    AND?: RichiestaScalarWhereWithAggregatesInput | RichiestaScalarWhereWithAggregatesInput[]
    OR?: RichiestaScalarWhereWithAggregatesInput[]
    NOT?: RichiestaScalarWhereWithAggregatesInput | RichiestaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Richiesta"> | string
    nome?: StringWithAggregatesFilter<"Richiesta"> | string
    cognome?: StringWithAggregatesFilter<"Richiesta"> | string
    email?: StringWithAggregatesFilter<"Richiesta"> | string
    telefono?: StringWithAggregatesFilter<"Richiesta"> | string
    note?: StringNullableWithAggregatesFilter<"Richiesta"> | string | null
    servizioId?: StringWithAggregatesFilter<"Richiesta"> | string
    stato?: EnumStatoRichiestaWithAggregatesFilter<"Richiesta"> | $Enums.StatoRichiesta
    pdfGenerato?: BoolWithAggregatesFilter<"Richiesta"> | boolean
    urlPdf?: StringNullableWithAggregatesFilter<"Richiesta"> | string | null
    dataPreferita?: DateTimeNullableWithAggregatesFilter<"Richiesta"> | Date | string | null
    oraPreferita?: DateTimeNullableWithAggregatesFilter<"Richiesta"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Richiesta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Richiesta"> | Date | string
  }

  export type AppuntamentoWhereInput = {
    AND?: AppuntamentoWhereInput | AppuntamentoWhereInput[]
    OR?: AppuntamentoWhereInput[]
    NOT?: AppuntamentoWhereInput | AppuntamentoWhereInput[]
    id?: StringFilter<"Appuntamento"> | string
    data?: DateTimeFilter<"Appuntamento"> | Date | string
    ora?: DateTimeFilter<"Appuntamento"> | Date | string
    durata?: IntFilter<"Appuntamento"> | number
    clienteId?: StringFilter<"Appuntamento"> | string
    servizioId?: StringFilter<"Appuntamento"> | string
    note?: StringNullableFilter<"Appuntamento"> | string | null
    stato?: EnumStatoAppuntamentoFilter<"Appuntamento"> | $Enums.StatoAppuntamento
    createdAt?: DateTimeFilter<"Appuntamento"> | Date | string
    updatedAt?: DateTimeFilter<"Appuntamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    servizio?: XOR<ServizioScalarRelationFilter, ServizioWhereInput>
  }

  export type AppuntamentoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    durata?: SortOrder
    clienteId?: SortOrder
    servizioId?: SortOrder
    note?: SortOrderInput | SortOrder
    stato?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    servizio?: ServizioOrderByWithRelationInput
    _relevance?: AppuntamentoOrderByRelevanceInput
  }

  export type AppuntamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppuntamentoWhereInput | AppuntamentoWhereInput[]
    OR?: AppuntamentoWhereInput[]
    NOT?: AppuntamentoWhereInput | AppuntamentoWhereInput[]
    data?: DateTimeFilter<"Appuntamento"> | Date | string
    ora?: DateTimeFilter<"Appuntamento"> | Date | string
    durata?: IntFilter<"Appuntamento"> | number
    clienteId?: StringFilter<"Appuntamento"> | string
    servizioId?: StringFilter<"Appuntamento"> | string
    note?: StringNullableFilter<"Appuntamento"> | string | null
    stato?: EnumStatoAppuntamentoFilter<"Appuntamento"> | $Enums.StatoAppuntamento
    createdAt?: DateTimeFilter<"Appuntamento"> | Date | string
    updatedAt?: DateTimeFilter<"Appuntamento"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    servizio?: XOR<ServizioScalarRelationFilter, ServizioWhereInput>
  }, "id">

  export type AppuntamentoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    durata?: SortOrder
    clienteId?: SortOrder
    servizioId?: SortOrder
    note?: SortOrderInput | SortOrder
    stato?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppuntamentoCountOrderByAggregateInput
    _avg?: AppuntamentoAvgOrderByAggregateInput
    _max?: AppuntamentoMaxOrderByAggregateInput
    _min?: AppuntamentoMinOrderByAggregateInput
    _sum?: AppuntamentoSumOrderByAggregateInput
  }

  export type AppuntamentoScalarWhereWithAggregatesInput = {
    AND?: AppuntamentoScalarWhereWithAggregatesInput | AppuntamentoScalarWhereWithAggregatesInput[]
    OR?: AppuntamentoScalarWhereWithAggregatesInput[]
    NOT?: AppuntamentoScalarWhereWithAggregatesInput | AppuntamentoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appuntamento"> | string
    data?: DateTimeWithAggregatesFilter<"Appuntamento"> | Date | string
    ora?: DateTimeWithAggregatesFilter<"Appuntamento"> | Date | string
    durata?: IntWithAggregatesFilter<"Appuntamento"> | number
    clienteId?: StringWithAggregatesFilter<"Appuntamento"> | string
    servizioId?: StringWithAggregatesFilter<"Appuntamento"> | string
    note?: StringNullableWithAggregatesFilter<"Appuntamento"> | string | null
    stato?: EnumStatoAppuntamentoWithAggregatesFilter<"Appuntamento"> | $Enums.StatoAppuntamento
    createdAt?: DateTimeWithAggregatesFilter<"Appuntamento"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appuntamento"> | Date | string
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    cognome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    veicoli?: VeicoloListRelationFilter
    appuntamenti?: AppuntamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    veicoli?: VeicoloOrderByRelationAggregateInput
    appuntamenti?: AppuntamentoOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    cognome?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeFilter<"Cliente"> | Date | string
    veicoli?: VeicoloListRelationFilter
    appuntamenti?: AppuntamentoListRelationFilter
  }, "id" | "email">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    cognome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type VeicoloWhereInput = {
    AND?: VeicoloWhereInput | VeicoloWhereInput[]
    OR?: VeicoloWhereInput[]
    NOT?: VeicoloWhereInput | VeicoloWhereInput[]
    id?: StringFilter<"Veicolo"> | string
    targa?: StringFilter<"Veicolo"> | string
    marca?: StringFilter<"Veicolo"> | string
    modello?: StringFilter<"Veicolo"> | string
    anno?: IntNullableFilter<"Veicolo"> | number | null
    clienteId?: StringFilter<"Veicolo"> | string
    note?: StringNullableFilter<"Veicolo"> | string | null
    createdAt?: DateTimeFilter<"Veicolo"> | Date | string
    updatedAt?: DateTimeFilter<"Veicolo"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type VeicoloOrderByWithRelationInput = {
    id?: SortOrder
    targa?: SortOrder
    marca?: SortOrder
    modello?: SortOrder
    anno?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    _relevance?: VeicoloOrderByRelevanceInput
  }

  export type VeicoloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    targa?: string
    AND?: VeicoloWhereInput | VeicoloWhereInput[]
    OR?: VeicoloWhereInput[]
    NOT?: VeicoloWhereInput | VeicoloWhereInput[]
    marca?: StringFilter<"Veicolo"> | string
    modello?: StringFilter<"Veicolo"> | string
    anno?: IntNullableFilter<"Veicolo"> | number | null
    clienteId?: StringFilter<"Veicolo"> | string
    note?: StringNullableFilter<"Veicolo"> | string | null
    createdAt?: DateTimeFilter<"Veicolo"> | Date | string
    updatedAt?: DateTimeFilter<"Veicolo"> | Date | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id" | "targa">

  export type VeicoloOrderByWithAggregationInput = {
    id?: SortOrder
    targa?: SortOrder
    marca?: SortOrder
    modello?: SortOrder
    anno?: SortOrderInput | SortOrder
    clienteId?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VeicoloCountOrderByAggregateInput
    _avg?: VeicoloAvgOrderByAggregateInput
    _max?: VeicoloMaxOrderByAggregateInput
    _min?: VeicoloMinOrderByAggregateInput
    _sum?: VeicoloSumOrderByAggregateInput
  }

  export type VeicoloScalarWhereWithAggregatesInput = {
    AND?: VeicoloScalarWhereWithAggregatesInput | VeicoloScalarWhereWithAggregatesInput[]
    OR?: VeicoloScalarWhereWithAggregatesInput[]
    NOT?: VeicoloScalarWhereWithAggregatesInput | VeicoloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Veicolo"> | string
    targa?: StringWithAggregatesFilter<"Veicolo"> | string
    marca?: StringWithAggregatesFilter<"Veicolo"> | string
    modello?: StringWithAggregatesFilter<"Veicolo"> | string
    anno?: IntNullableWithAggregatesFilter<"Veicolo"> | number | null
    clienteId?: StringWithAggregatesFilter<"Veicolo"> | string
    note?: StringNullableWithAggregatesFilter<"Veicolo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Veicolo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Veicolo"> | Date | string
  }

  export type ServizioCreateInput = {
    id?: string
    nome: string
    descrizione: string
    prezzo?: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    richieste?: RichiestaCreateNestedManyWithoutServizioInput
    appuntamenti?: AppuntamentoCreateNestedManyWithoutServizioInput
  }

  export type ServizioUncheckedCreateInput = {
    id?: string
    nome: string
    descrizione: string
    prezzo?: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    richieste?: RichiestaUncheckedCreateNestedManyWithoutServizioInput
    appuntamenti?: AppuntamentoUncheckedCreateNestedManyWithoutServizioInput
  }

  export type ServizioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richieste?: RichiestaUpdateManyWithoutServizioNestedInput
    appuntamenti?: AppuntamentoUpdateManyWithoutServizioNestedInput
  }

  export type ServizioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richieste?: RichiestaUncheckedUpdateManyWithoutServizioNestedInput
    appuntamenti?: AppuntamentoUncheckedUpdateManyWithoutServizioNestedInput
  }

  export type ServizioCreateManyInput = {
    id?: string
    nome: string
    descrizione: string
    prezzo?: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServizioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServizioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichiestaCreateInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    note?: string | null
    stato?: $Enums.StatoRichiesta
    pdfGenerato?: boolean
    urlPdf?: string | null
    dataPreferita?: Date | string | null
    oraPreferita?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servizio: ServizioCreateNestedOneWithoutRichiesteInput
  }

  export type RichiestaUncheckedCreateInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    note?: string | null
    servizioId: string
    stato?: $Enums.StatoRichiesta
    pdfGenerato?: boolean
    urlPdf?: string | null
    dataPreferita?: Date | string | null
    oraPreferita?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichiestaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoRichiestaFieldUpdateOperationsInput | $Enums.StatoRichiesta
    pdfGenerato?: BoolFieldUpdateOperationsInput | boolean
    urlPdf?: NullableStringFieldUpdateOperationsInput | string | null
    dataPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oraPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servizio?: ServizioUpdateOneRequiredWithoutRichiesteNestedInput
  }

  export type RichiestaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    servizioId?: StringFieldUpdateOperationsInput | string
    stato?: EnumStatoRichiestaFieldUpdateOperationsInput | $Enums.StatoRichiesta
    pdfGenerato?: BoolFieldUpdateOperationsInput | boolean
    urlPdf?: NullableStringFieldUpdateOperationsInput | string | null
    dataPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oraPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichiestaCreateManyInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    note?: string | null
    servizioId: string
    stato?: $Enums.StatoRichiesta
    pdfGenerato?: boolean
    urlPdf?: string | null
    dataPreferita?: Date | string | null
    oraPreferita?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichiestaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoRichiestaFieldUpdateOperationsInput | $Enums.StatoRichiesta
    pdfGenerato?: BoolFieldUpdateOperationsInput | boolean
    urlPdf?: NullableStringFieldUpdateOperationsInput | string | null
    dataPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oraPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichiestaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    servizioId?: StringFieldUpdateOperationsInput | string
    stato?: EnumStatoRichiestaFieldUpdateOperationsInput | $Enums.StatoRichiesta
    pdfGenerato?: BoolFieldUpdateOperationsInput | boolean
    urlPdf?: NullableStringFieldUpdateOperationsInput | string | null
    dataPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oraPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppuntamentoCreateInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutAppuntamentiInput
    servizio: ServizioCreateNestedOneWithoutAppuntamentiInput
  }

  export type AppuntamentoUncheckedCreateInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    clienteId: string
    servizioId: string
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppuntamentoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAppuntamentiNestedInput
    servizio?: ServizioUpdateOneRequiredWithoutAppuntamentiNestedInput
  }

  export type AppuntamentoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    clienteId?: StringFieldUpdateOperationsInput | string
    servizioId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppuntamentoCreateManyInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    clienteId: string
    servizioId: string
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppuntamentoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppuntamentoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    clienteId?: StringFieldUpdateOperationsInput | string
    servizioId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteCreateInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veicoli?: VeicoloCreateNestedManyWithoutClienteInput
    appuntamenti?: AppuntamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veicoli?: VeicoloUncheckedCreateNestedManyWithoutClienteInput
    appuntamenti?: AppuntamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veicoli?: VeicoloUpdateManyWithoutClienteNestedInput
    appuntamenti?: AppuntamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veicoli?: VeicoloUncheckedUpdateManyWithoutClienteNestedInput
    appuntamenti?: AppuntamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeicoloCreateInput = {
    id?: string
    targa: string
    marca: string
    modello: string
    anno?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutVeicoliInput
  }

  export type VeicoloUncheckedCreateInput = {
    id?: string
    targa: string
    marca: string
    modello: string
    anno?: number | null
    clienteId: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeicoloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modello?: StringFieldUpdateOperationsInput | string
    anno?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutVeicoliNestedInput
  }

  export type VeicoloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modello?: StringFieldUpdateOperationsInput | string
    anno?: NullableIntFieldUpdateOperationsInput | number | null
    clienteId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeicoloCreateManyInput = {
    id?: string
    targa: string
    marca: string
    modello: string
    anno?: number | null
    clienteId: string
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeicoloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modello?: StringFieldUpdateOperationsInput | string
    anno?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeicoloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    targa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modello?: StringFieldUpdateOperationsInput | string
    anno?: NullableIntFieldUpdateOperationsInput | number | null
    clienteId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumCategoriaServizioFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaServizio | EnumCategoriaServizioFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaServizio[]
    notIn?: $Enums.CategoriaServizio[]
    not?: NestedEnumCategoriaServizioFilter<$PrismaModel> | $Enums.CategoriaServizio
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RichiestaListRelationFilter = {
    every?: RichiestaWhereInput
    some?: RichiestaWhereInput
    none?: RichiestaWhereInput
  }

  export type AppuntamentoListRelationFilter = {
    every?: AppuntamentoWhereInput
    some?: AppuntamentoWhereInput
    none?: AppuntamentoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RichiestaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppuntamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServizioOrderByRelevanceInput = {
    fields: ServizioOrderByRelevanceFieldEnum | ServizioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ServizioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descrizione?: SortOrder
    prezzo?: SortOrder
    durata?: SortOrder
    categoria?: SortOrder
    attivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServizioAvgOrderByAggregateInput = {
    prezzo?: SortOrder
    durata?: SortOrder
  }

  export type ServizioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descrizione?: SortOrder
    prezzo?: SortOrder
    durata?: SortOrder
    categoria?: SortOrder
    attivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServizioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descrizione?: SortOrder
    prezzo?: SortOrder
    durata?: SortOrder
    categoria?: SortOrder
    attivo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServizioSumOrderByAggregateInput = {
    prezzo?: SortOrder
    durata?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumCategoriaServizioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaServizio | EnumCategoriaServizioFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaServizio[]
    notIn?: $Enums.CategoriaServizio[]
    not?: NestedEnumCategoriaServizioWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaServizio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaServizioFilter<$PrismaModel>
    _max?: NestedEnumCategoriaServizioFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumStatoRichiestaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoRichiesta | EnumStatoRichiestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatoRichiesta[]
    notIn?: $Enums.StatoRichiesta[]
    not?: NestedEnumStatoRichiestaFilter<$PrismaModel> | $Enums.StatoRichiesta
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ServizioScalarRelationFilter = {
    is?: ServizioWhereInput
    isNot?: ServizioWhereInput
  }

  export type RichiestaOrderByRelevanceInput = {
    fields: RichiestaOrderByRelevanceFieldEnum | RichiestaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RichiestaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    note?: SortOrder
    servizioId?: SortOrder
    stato?: SortOrder
    pdfGenerato?: SortOrder
    urlPdf?: SortOrder
    dataPreferita?: SortOrder
    oraPreferita?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RichiestaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    note?: SortOrder
    servizioId?: SortOrder
    stato?: SortOrder
    pdfGenerato?: SortOrder
    urlPdf?: SortOrder
    dataPreferita?: SortOrder
    oraPreferita?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RichiestaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    note?: SortOrder
    servizioId?: SortOrder
    stato?: SortOrder
    pdfGenerato?: SortOrder
    urlPdf?: SortOrder
    dataPreferita?: SortOrder
    oraPreferita?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumStatoRichiestaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoRichiesta | EnumStatoRichiestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatoRichiesta[]
    notIn?: $Enums.StatoRichiesta[]
    not?: NestedEnumStatoRichiestaWithAggregatesFilter<$PrismaModel> | $Enums.StatoRichiesta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatoRichiestaFilter<$PrismaModel>
    _max?: NestedEnumStatoRichiestaFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatoAppuntamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoAppuntamento | EnumStatoAppuntamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatoAppuntamento[]
    notIn?: $Enums.StatoAppuntamento[]
    not?: NestedEnumStatoAppuntamentoFilter<$PrismaModel> | $Enums.StatoAppuntamento
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type AppuntamentoOrderByRelevanceInput = {
    fields: AppuntamentoOrderByRelevanceFieldEnum | AppuntamentoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppuntamentoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    durata?: SortOrder
    clienteId?: SortOrder
    servizioId?: SortOrder
    note?: SortOrder
    stato?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppuntamentoAvgOrderByAggregateInput = {
    durata?: SortOrder
  }

  export type AppuntamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    durata?: SortOrder
    clienteId?: SortOrder
    servizioId?: SortOrder
    note?: SortOrder
    stato?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppuntamentoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    ora?: SortOrder
    durata?: SortOrder
    clienteId?: SortOrder
    servizioId?: SortOrder
    note?: SortOrder
    stato?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppuntamentoSumOrderByAggregateInput = {
    durata?: SortOrder
  }

  export type EnumStatoAppuntamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoAppuntamento | EnumStatoAppuntamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatoAppuntamento[]
    notIn?: $Enums.StatoAppuntamento[]
    not?: NestedEnumStatoAppuntamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatoAppuntamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatoAppuntamentoFilter<$PrismaModel>
    _max?: NestedEnumStatoAppuntamentoFilter<$PrismaModel>
  }

  export type VeicoloListRelationFilter = {
    every?: VeicoloWhereInput
    some?: VeicoloWhereInput
    none?: VeicoloWhereInput
  }

  export type VeicoloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cognome?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VeicoloOrderByRelevanceInput = {
    fields: VeicoloOrderByRelevanceFieldEnum | VeicoloOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VeicoloCountOrderByAggregateInput = {
    id?: SortOrder
    targa?: SortOrder
    marca?: SortOrder
    modello?: SortOrder
    anno?: SortOrder
    clienteId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeicoloAvgOrderByAggregateInput = {
    anno?: SortOrder
  }

  export type VeicoloMaxOrderByAggregateInput = {
    id?: SortOrder
    targa?: SortOrder
    marca?: SortOrder
    modello?: SortOrder
    anno?: SortOrder
    clienteId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeicoloMinOrderByAggregateInput = {
    id?: SortOrder
    targa?: SortOrder
    marca?: SortOrder
    modello?: SortOrder
    anno?: SortOrder
    clienteId?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeicoloSumOrderByAggregateInput = {
    anno?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RichiestaCreateNestedManyWithoutServizioInput = {
    create?: XOR<RichiestaCreateWithoutServizioInput, RichiestaUncheckedCreateWithoutServizioInput> | RichiestaCreateWithoutServizioInput[] | RichiestaUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: RichiestaCreateOrConnectWithoutServizioInput | RichiestaCreateOrConnectWithoutServizioInput[]
    createMany?: RichiestaCreateManyServizioInputEnvelope
    connect?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
  }

  export type AppuntamentoCreateNestedManyWithoutServizioInput = {
    create?: XOR<AppuntamentoCreateWithoutServizioInput, AppuntamentoUncheckedCreateWithoutServizioInput> | AppuntamentoCreateWithoutServizioInput[] | AppuntamentoUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutServizioInput | AppuntamentoCreateOrConnectWithoutServizioInput[]
    createMany?: AppuntamentoCreateManyServizioInputEnvelope
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
  }

  export type RichiestaUncheckedCreateNestedManyWithoutServizioInput = {
    create?: XOR<RichiestaCreateWithoutServizioInput, RichiestaUncheckedCreateWithoutServizioInput> | RichiestaCreateWithoutServizioInput[] | RichiestaUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: RichiestaCreateOrConnectWithoutServizioInput | RichiestaCreateOrConnectWithoutServizioInput[]
    createMany?: RichiestaCreateManyServizioInputEnvelope
    connect?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
  }

  export type AppuntamentoUncheckedCreateNestedManyWithoutServizioInput = {
    create?: XOR<AppuntamentoCreateWithoutServizioInput, AppuntamentoUncheckedCreateWithoutServizioInput> | AppuntamentoCreateWithoutServizioInput[] | AppuntamentoUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutServizioInput | AppuntamentoCreateOrConnectWithoutServizioInput[]
    createMany?: AppuntamentoCreateManyServizioInputEnvelope
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCategoriaServizioFieldUpdateOperationsInput = {
    set?: $Enums.CategoriaServizio
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RichiestaUpdateManyWithoutServizioNestedInput = {
    create?: XOR<RichiestaCreateWithoutServizioInput, RichiestaUncheckedCreateWithoutServizioInput> | RichiestaCreateWithoutServizioInput[] | RichiestaUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: RichiestaCreateOrConnectWithoutServizioInput | RichiestaCreateOrConnectWithoutServizioInput[]
    upsert?: RichiestaUpsertWithWhereUniqueWithoutServizioInput | RichiestaUpsertWithWhereUniqueWithoutServizioInput[]
    createMany?: RichiestaCreateManyServizioInputEnvelope
    set?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    disconnect?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    delete?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    connect?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    update?: RichiestaUpdateWithWhereUniqueWithoutServizioInput | RichiestaUpdateWithWhereUniqueWithoutServizioInput[]
    updateMany?: RichiestaUpdateManyWithWhereWithoutServizioInput | RichiestaUpdateManyWithWhereWithoutServizioInput[]
    deleteMany?: RichiestaScalarWhereInput | RichiestaScalarWhereInput[]
  }

  export type AppuntamentoUpdateManyWithoutServizioNestedInput = {
    create?: XOR<AppuntamentoCreateWithoutServizioInput, AppuntamentoUncheckedCreateWithoutServizioInput> | AppuntamentoCreateWithoutServizioInput[] | AppuntamentoUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutServizioInput | AppuntamentoCreateOrConnectWithoutServizioInput[]
    upsert?: AppuntamentoUpsertWithWhereUniqueWithoutServizioInput | AppuntamentoUpsertWithWhereUniqueWithoutServizioInput[]
    createMany?: AppuntamentoCreateManyServizioInputEnvelope
    set?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    disconnect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    delete?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    update?: AppuntamentoUpdateWithWhereUniqueWithoutServizioInput | AppuntamentoUpdateWithWhereUniqueWithoutServizioInput[]
    updateMany?: AppuntamentoUpdateManyWithWhereWithoutServizioInput | AppuntamentoUpdateManyWithWhereWithoutServizioInput[]
    deleteMany?: AppuntamentoScalarWhereInput | AppuntamentoScalarWhereInput[]
  }

  export type RichiestaUncheckedUpdateManyWithoutServizioNestedInput = {
    create?: XOR<RichiestaCreateWithoutServizioInput, RichiestaUncheckedCreateWithoutServizioInput> | RichiestaCreateWithoutServizioInput[] | RichiestaUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: RichiestaCreateOrConnectWithoutServizioInput | RichiestaCreateOrConnectWithoutServizioInput[]
    upsert?: RichiestaUpsertWithWhereUniqueWithoutServizioInput | RichiestaUpsertWithWhereUniqueWithoutServizioInput[]
    createMany?: RichiestaCreateManyServizioInputEnvelope
    set?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    disconnect?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    delete?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    connect?: RichiestaWhereUniqueInput | RichiestaWhereUniqueInput[]
    update?: RichiestaUpdateWithWhereUniqueWithoutServizioInput | RichiestaUpdateWithWhereUniqueWithoutServizioInput[]
    updateMany?: RichiestaUpdateManyWithWhereWithoutServizioInput | RichiestaUpdateManyWithWhereWithoutServizioInput[]
    deleteMany?: RichiestaScalarWhereInput | RichiestaScalarWhereInput[]
  }

  export type AppuntamentoUncheckedUpdateManyWithoutServizioNestedInput = {
    create?: XOR<AppuntamentoCreateWithoutServizioInput, AppuntamentoUncheckedCreateWithoutServizioInput> | AppuntamentoCreateWithoutServizioInput[] | AppuntamentoUncheckedCreateWithoutServizioInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutServizioInput | AppuntamentoCreateOrConnectWithoutServizioInput[]
    upsert?: AppuntamentoUpsertWithWhereUniqueWithoutServizioInput | AppuntamentoUpsertWithWhereUniqueWithoutServizioInput[]
    createMany?: AppuntamentoCreateManyServizioInputEnvelope
    set?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    disconnect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    delete?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    update?: AppuntamentoUpdateWithWhereUniqueWithoutServizioInput | AppuntamentoUpdateWithWhereUniqueWithoutServizioInput[]
    updateMany?: AppuntamentoUpdateManyWithWhereWithoutServizioInput | AppuntamentoUpdateManyWithWhereWithoutServizioInput[]
    deleteMany?: AppuntamentoScalarWhereInput | AppuntamentoScalarWhereInput[]
  }

  export type ServizioCreateNestedOneWithoutRichiesteInput = {
    create?: XOR<ServizioCreateWithoutRichiesteInput, ServizioUncheckedCreateWithoutRichiesteInput>
    connectOrCreate?: ServizioCreateOrConnectWithoutRichiesteInput
    connect?: ServizioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatoRichiestaFieldUpdateOperationsInput = {
    set?: $Enums.StatoRichiesta
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServizioUpdateOneRequiredWithoutRichiesteNestedInput = {
    create?: XOR<ServizioCreateWithoutRichiesteInput, ServizioUncheckedCreateWithoutRichiesteInput>
    connectOrCreate?: ServizioCreateOrConnectWithoutRichiesteInput
    upsert?: ServizioUpsertWithoutRichiesteInput
    connect?: ServizioWhereUniqueInput
    update?: XOR<XOR<ServizioUpdateToOneWithWhereWithoutRichiesteInput, ServizioUpdateWithoutRichiesteInput>, ServizioUncheckedUpdateWithoutRichiesteInput>
  }

  export type ClienteCreateNestedOneWithoutAppuntamentiInput = {
    create?: XOR<ClienteCreateWithoutAppuntamentiInput, ClienteUncheckedCreateWithoutAppuntamentiInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAppuntamentiInput
    connect?: ClienteWhereUniqueInput
  }

  export type ServizioCreateNestedOneWithoutAppuntamentiInput = {
    create?: XOR<ServizioCreateWithoutAppuntamentiInput, ServizioUncheckedCreateWithoutAppuntamentiInput>
    connectOrCreate?: ServizioCreateOrConnectWithoutAppuntamentiInput
    connect?: ServizioWhereUniqueInput
  }

  export type EnumStatoAppuntamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatoAppuntamento
  }

  export type ClienteUpdateOneRequiredWithoutAppuntamentiNestedInput = {
    create?: XOR<ClienteCreateWithoutAppuntamentiInput, ClienteUncheckedCreateWithoutAppuntamentiInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAppuntamentiInput
    upsert?: ClienteUpsertWithoutAppuntamentiInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAppuntamentiInput, ClienteUpdateWithoutAppuntamentiInput>, ClienteUncheckedUpdateWithoutAppuntamentiInput>
  }

  export type ServizioUpdateOneRequiredWithoutAppuntamentiNestedInput = {
    create?: XOR<ServizioCreateWithoutAppuntamentiInput, ServizioUncheckedCreateWithoutAppuntamentiInput>
    connectOrCreate?: ServizioCreateOrConnectWithoutAppuntamentiInput
    upsert?: ServizioUpsertWithoutAppuntamentiInput
    connect?: ServizioWhereUniqueInput
    update?: XOR<XOR<ServizioUpdateToOneWithWhereWithoutAppuntamentiInput, ServizioUpdateWithoutAppuntamentiInput>, ServizioUncheckedUpdateWithoutAppuntamentiInput>
  }

  export type VeicoloCreateNestedManyWithoutClienteInput = {
    create?: XOR<VeicoloCreateWithoutClienteInput, VeicoloUncheckedCreateWithoutClienteInput> | VeicoloCreateWithoutClienteInput[] | VeicoloUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeicoloCreateOrConnectWithoutClienteInput | VeicoloCreateOrConnectWithoutClienteInput[]
    createMany?: VeicoloCreateManyClienteInputEnvelope
    connect?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
  }

  export type AppuntamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<AppuntamentoCreateWithoutClienteInput, AppuntamentoUncheckedCreateWithoutClienteInput> | AppuntamentoCreateWithoutClienteInput[] | AppuntamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutClienteInput | AppuntamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AppuntamentoCreateManyClienteInputEnvelope
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
  }

  export type VeicoloUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<VeicoloCreateWithoutClienteInput, VeicoloUncheckedCreateWithoutClienteInput> | VeicoloCreateWithoutClienteInput[] | VeicoloUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeicoloCreateOrConnectWithoutClienteInput | VeicoloCreateOrConnectWithoutClienteInput[]
    createMany?: VeicoloCreateManyClienteInputEnvelope
    connect?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
  }

  export type AppuntamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AppuntamentoCreateWithoutClienteInput, AppuntamentoUncheckedCreateWithoutClienteInput> | AppuntamentoCreateWithoutClienteInput[] | AppuntamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutClienteInput | AppuntamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AppuntamentoCreateManyClienteInputEnvelope
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
  }

  export type VeicoloUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VeicoloCreateWithoutClienteInput, VeicoloUncheckedCreateWithoutClienteInput> | VeicoloCreateWithoutClienteInput[] | VeicoloUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeicoloCreateOrConnectWithoutClienteInput | VeicoloCreateOrConnectWithoutClienteInput[]
    upsert?: VeicoloUpsertWithWhereUniqueWithoutClienteInput | VeicoloUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VeicoloCreateManyClienteInputEnvelope
    set?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    disconnect?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    delete?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    connect?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    update?: VeicoloUpdateWithWhereUniqueWithoutClienteInput | VeicoloUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VeicoloUpdateManyWithWhereWithoutClienteInput | VeicoloUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VeicoloScalarWhereInput | VeicoloScalarWhereInput[]
  }

  export type AppuntamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AppuntamentoCreateWithoutClienteInput, AppuntamentoUncheckedCreateWithoutClienteInput> | AppuntamentoCreateWithoutClienteInput[] | AppuntamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutClienteInput | AppuntamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AppuntamentoUpsertWithWhereUniqueWithoutClienteInput | AppuntamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AppuntamentoCreateManyClienteInputEnvelope
    set?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    disconnect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    delete?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    update?: AppuntamentoUpdateWithWhereUniqueWithoutClienteInput | AppuntamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AppuntamentoUpdateManyWithWhereWithoutClienteInput | AppuntamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AppuntamentoScalarWhereInput | AppuntamentoScalarWhereInput[]
  }

  export type VeicoloUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<VeicoloCreateWithoutClienteInput, VeicoloUncheckedCreateWithoutClienteInput> | VeicoloCreateWithoutClienteInput[] | VeicoloUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: VeicoloCreateOrConnectWithoutClienteInput | VeicoloCreateOrConnectWithoutClienteInput[]
    upsert?: VeicoloUpsertWithWhereUniqueWithoutClienteInput | VeicoloUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: VeicoloCreateManyClienteInputEnvelope
    set?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    disconnect?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    delete?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    connect?: VeicoloWhereUniqueInput | VeicoloWhereUniqueInput[]
    update?: VeicoloUpdateWithWhereUniqueWithoutClienteInput | VeicoloUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: VeicoloUpdateManyWithWhereWithoutClienteInput | VeicoloUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: VeicoloScalarWhereInput | VeicoloScalarWhereInput[]
  }

  export type AppuntamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AppuntamentoCreateWithoutClienteInput, AppuntamentoUncheckedCreateWithoutClienteInput> | AppuntamentoCreateWithoutClienteInput[] | AppuntamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AppuntamentoCreateOrConnectWithoutClienteInput | AppuntamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AppuntamentoUpsertWithWhereUniqueWithoutClienteInput | AppuntamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AppuntamentoCreateManyClienteInputEnvelope
    set?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    disconnect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    delete?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    connect?: AppuntamentoWhereUniqueInput | AppuntamentoWhereUniqueInput[]
    update?: AppuntamentoUpdateWithWhereUniqueWithoutClienteInput | AppuntamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AppuntamentoUpdateManyWithWhereWithoutClienteInput | AppuntamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AppuntamentoScalarWhereInput | AppuntamentoScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutVeicoliInput = {
    create?: XOR<ClienteCreateWithoutVeicoliInput, ClienteUncheckedCreateWithoutVeicoliInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVeicoliInput
    connect?: ClienteWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClienteUpdateOneRequiredWithoutVeicoliNestedInput = {
    create?: XOR<ClienteCreateWithoutVeicoliInput, ClienteUncheckedCreateWithoutVeicoliInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutVeicoliInput
    upsert?: ClienteUpsertWithoutVeicoliInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutVeicoliInput, ClienteUpdateWithoutVeicoliInput>, ClienteUncheckedUpdateWithoutVeicoliInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumCategoriaServizioFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaServizio | EnumCategoriaServizioFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaServizio[]
    notIn?: $Enums.CategoriaServizio[]
    not?: NestedEnumCategoriaServizioFilter<$PrismaModel> | $Enums.CategoriaServizio
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCategoriaServizioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoriaServizio | EnumCategoriaServizioFieldRefInput<$PrismaModel>
    in?: $Enums.CategoriaServizio[]
    notIn?: $Enums.CategoriaServizio[]
    not?: NestedEnumCategoriaServizioWithAggregatesFilter<$PrismaModel> | $Enums.CategoriaServizio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoriaServizioFilter<$PrismaModel>
    _max?: NestedEnumCategoriaServizioFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumStatoRichiestaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoRichiesta | EnumStatoRichiestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatoRichiesta[]
    notIn?: $Enums.StatoRichiesta[]
    not?: NestedEnumStatoRichiestaFilter<$PrismaModel> | $Enums.StatoRichiesta
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatoRichiestaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoRichiesta | EnumStatoRichiestaFieldRefInput<$PrismaModel>
    in?: $Enums.StatoRichiesta[]
    notIn?: $Enums.StatoRichiesta[]
    not?: NestedEnumStatoRichiestaWithAggregatesFilter<$PrismaModel> | $Enums.StatoRichiesta
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatoRichiestaFilter<$PrismaModel>
    _max?: NestedEnumStatoRichiestaFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatoAppuntamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoAppuntamento | EnumStatoAppuntamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatoAppuntamento[]
    notIn?: $Enums.StatoAppuntamento[]
    not?: NestedEnumStatoAppuntamentoFilter<$PrismaModel> | $Enums.StatoAppuntamento
  }

  export type NestedEnumStatoAppuntamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatoAppuntamento | EnumStatoAppuntamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatoAppuntamento[]
    notIn?: $Enums.StatoAppuntamento[]
    not?: NestedEnumStatoAppuntamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatoAppuntamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatoAppuntamentoFilter<$PrismaModel>
    _max?: NestedEnumStatoAppuntamentoFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RichiestaCreateWithoutServizioInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    note?: string | null
    stato?: $Enums.StatoRichiesta
    pdfGenerato?: boolean
    urlPdf?: string | null
    dataPreferita?: Date | string | null
    oraPreferita?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichiestaUncheckedCreateWithoutServizioInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    note?: string | null
    stato?: $Enums.StatoRichiesta
    pdfGenerato?: boolean
    urlPdf?: string | null
    dataPreferita?: Date | string | null
    oraPreferita?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichiestaCreateOrConnectWithoutServizioInput = {
    where: RichiestaWhereUniqueInput
    create: XOR<RichiestaCreateWithoutServizioInput, RichiestaUncheckedCreateWithoutServizioInput>
  }

  export type RichiestaCreateManyServizioInputEnvelope = {
    data: RichiestaCreateManyServizioInput | RichiestaCreateManyServizioInput[]
    skipDuplicates?: boolean
  }

  export type AppuntamentoCreateWithoutServizioInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
    cliente: ClienteCreateNestedOneWithoutAppuntamentiInput
  }

  export type AppuntamentoUncheckedCreateWithoutServizioInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    clienteId: string
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppuntamentoCreateOrConnectWithoutServizioInput = {
    where: AppuntamentoWhereUniqueInput
    create: XOR<AppuntamentoCreateWithoutServizioInput, AppuntamentoUncheckedCreateWithoutServizioInput>
  }

  export type AppuntamentoCreateManyServizioInputEnvelope = {
    data: AppuntamentoCreateManyServizioInput | AppuntamentoCreateManyServizioInput[]
    skipDuplicates?: boolean
  }

  export type RichiestaUpsertWithWhereUniqueWithoutServizioInput = {
    where: RichiestaWhereUniqueInput
    update: XOR<RichiestaUpdateWithoutServizioInput, RichiestaUncheckedUpdateWithoutServizioInput>
    create: XOR<RichiestaCreateWithoutServizioInput, RichiestaUncheckedCreateWithoutServizioInput>
  }

  export type RichiestaUpdateWithWhereUniqueWithoutServizioInput = {
    where: RichiestaWhereUniqueInput
    data: XOR<RichiestaUpdateWithoutServizioInput, RichiestaUncheckedUpdateWithoutServizioInput>
  }

  export type RichiestaUpdateManyWithWhereWithoutServizioInput = {
    where: RichiestaScalarWhereInput
    data: XOR<RichiestaUpdateManyMutationInput, RichiestaUncheckedUpdateManyWithoutServizioInput>
  }

  export type RichiestaScalarWhereInput = {
    AND?: RichiestaScalarWhereInput | RichiestaScalarWhereInput[]
    OR?: RichiestaScalarWhereInput[]
    NOT?: RichiestaScalarWhereInput | RichiestaScalarWhereInput[]
    id?: StringFilter<"Richiesta"> | string
    nome?: StringFilter<"Richiesta"> | string
    cognome?: StringFilter<"Richiesta"> | string
    email?: StringFilter<"Richiesta"> | string
    telefono?: StringFilter<"Richiesta"> | string
    note?: StringNullableFilter<"Richiesta"> | string | null
    servizioId?: StringFilter<"Richiesta"> | string
    stato?: EnumStatoRichiestaFilter<"Richiesta"> | $Enums.StatoRichiesta
    pdfGenerato?: BoolFilter<"Richiesta"> | boolean
    urlPdf?: StringNullableFilter<"Richiesta"> | string | null
    dataPreferita?: DateTimeNullableFilter<"Richiesta"> | Date | string | null
    oraPreferita?: DateTimeNullableFilter<"Richiesta"> | Date | string | null
    createdAt?: DateTimeFilter<"Richiesta"> | Date | string
    updatedAt?: DateTimeFilter<"Richiesta"> | Date | string
  }

  export type AppuntamentoUpsertWithWhereUniqueWithoutServizioInput = {
    where: AppuntamentoWhereUniqueInput
    update: XOR<AppuntamentoUpdateWithoutServizioInput, AppuntamentoUncheckedUpdateWithoutServizioInput>
    create: XOR<AppuntamentoCreateWithoutServizioInput, AppuntamentoUncheckedCreateWithoutServizioInput>
  }

  export type AppuntamentoUpdateWithWhereUniqueWithoutServizioInput = {
    where: AppuntamentoWhereUniqueInput
    data: XOR<AppuntamentoUpdateWithoutServizioInput, AppuntamentoUncheckedUpdateWithoutServizioInput>
  }

  export type AppuntamentoUpdateManyWithWhereWithoutServizioInput = {
    where: AppuntamentoScalarWhereInput
    data: XOR<AppuntamentoUpdateManyMutationInput, AppuntamentoUncheckedUpdateManyWithoutServizioInput>
  }

  export type AppuntamentoScalarWhereInput = {
    AND?: AppuntamentoScalarWhereInput | AppuntamentoScalarWhereInput[]
    OR?: AppuntamentoScalarWhereInput[]
    NOT?: AppuntamentoScalarWhereInput | AppuntamentoScalarWhereInput[]
    id?: StringFilter<"Appuntamento"> | string
    data?: DateTimeFilter<"Appuntamento"> | Date | string
    ora?: DateTimeFilter<"Appuntamento"> | Date | string
    durata?: IntFilter<"Appuntamento"> | number
    clienteId?: StringFilter<"Appuntamento"> | string
    servizioId?: StringFilter<"Appuntamento"> | string
    note?: StringNullableFilter<"Appuntamento"> | string | null
    stato?: EnumStatoAppuntamentoFilter<"Appuntamento"> | $Enums.StatoAppuntamento
    createdAt?: DateTimeFilter<"Appuntamento"> | Date | string
    updatedAt?: DateTimeFilter<"Appuntamento"> | Date | string
  }

  export type ServizioCreateWithoutRichiesteInput = {
    id?: string
    nome: string
    descrizione: string
    prezzo?: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appuntamenti?: AppuntamentoCreateNestedManyWithoutServizioInput
  }

  export type ServizioUncheckedCreateWithoutRichiesteInput = {
    id?: string
    nome: string
    descrizione: string
    prezzo?: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    appuntamenti?: AppuntamentoUncheckedCreateNestedManyWithoutServizioInput
  }

  export type ServizioCreateOrConnectWithoutRichiesteInput = {
    where: ServizioWhereUniqueInput
    create: XOR<ServizioCreateWithoutRichiesteInput, ServizioUncheckedCreateWithoutRichiesteInput>
  }

  export type ServizioUpsertWithoutRichiesteInput = {
    update: XOR<ServizioUpdateWithoutRichiesteInput, ServizioUncheckedUpdateWithoutRichiesteInput>
    create: XOR<ServizioCreateWithoutRichiesteInput, ServizioUncheckedCreateWithoutRichiesteInput>
    where?: ServizioWhereInput
  }

  export type ServizioUpdateToOneWithWhereWithoutRichiesteInput = {
    where?: ServizioWhereInput
    data: XOR<ServizioUpdateWithoutRichiesteInput, ServizioUncheckedUpdateWithoutRichiesteInput>
  }

  export type ServizioUpdateWithoutRichiesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appuntamenti?: AppuntamentoUpdateManyWithoutServizioNestedInput
  }

  export type ServizioUncheckedUpdateWithoutRichiesteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appuntamenti?: AppuntamentoUncheckedUpdateManyWithoutServizioNestedInput
  }

  export type ClienteCreateWithoutAppuntamentiInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veicoli?: VeicoloCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAppuntamentiInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    veicoli?: VeicoloUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAppuntamentiInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAppuntamentiInput, ClienteUncheckedCreateWithoutAppuntamentiInput>
  }

  export type ServizioCreateWithoutAppuntamentiInput = {
    id?: string
    nome: string
    descrizione: string
    prezzo?: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    richieste?: RichiestaCreateNestedManyWithoutServizioInput
  }

  export type ServizioUncheckedCreateWithoutAppuntamentiInput = {
    id?: string
    nome: string
    descrizione: string
    prezzo?: number | null
    durata: number
    categoria: $Enums.CategoriaServizio
    attivo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    richieste?: RichiestaUncheckedCreateNestedManyWithoutServizioInput
  }

  export type ServizioCreateOrConnectWithoutAppuntamentiInput = {
    where: ServizioWhereUniqueInput
    create: XOR<ServizioCreateWithoutAppuntamentiInput, ServizioUncheckedCreateWithoutAppuntamentiInput>
  }

  export type ClienteUpsertWithoutAppuntamentiInput = {
    update: XOR<ClienteUpdateWithoutAppuntamentiInput, ClienteUncheckedUpdateWithoutAppuntamentiInput>
    create: XOR<ClienteCreateWithoutAppuntamentiInput, ClienteUncheckedCreateWithoutAppuntamentiInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAppuntamentiInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAppuntamentiInput, ClienteUncheckedUpdateWithoutAppuntamentiInput>
  }

  export type ClienteUpdateWithoutAppuntamentiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veicoli?: VeicoloUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAppuntamentiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    veicoli?: VeicoloUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ServizioUpsertWithoutAppuntamentiInput = {
    update: XOR<ServizioUpdateWithoutAppuntamentiInput, ServizioUncheckedUpdateWithoutAppuntamentiInput>
    create: XOR<ServizioCreateWithoutAppuntamentiInput, ServizioUncheckedCreateWithoutAppuntamentiInput>
    where?: ServizioWhereInput
  }

  export type ServizioUpdateToOneWithWhereWithoutAppuntamentiInput = {
    where?: ServizioWhereInput
    data: XOR<ServizioUpdateWithoutAppuntamentiInput, ServizioUncheckedUpdateWithoutAppuntamentiInput>
  }

  export type ServizioUpdateWithoutAppuntamentiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richieste?: RichiestaUpdateManyWithoutServizioNestedInput
  }

  export type ServizioUncheckedUpdateWithoutAppuntamentiInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    descrizione?: StringFieldUpdateOperationsInput | string
    prezzo?: NullableFloatFieldUpdateOperationsInput | number | null
    durata?: IntFieldUpdateOperationsInput | number
    categoria?: EnumCategoriaServizioFieldUpdateOperationsInput | $Enums.CategoriaServizio
    attivo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    richieste?: RichiestaUncheckedUpdateManyWithoutServizioNestedInput
  }

  export type VeicoloCreateWithoutClienteInput = {
    id?: string
    targa: string
    marca: string
    modello: string
    anno?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeicoloUncheckedCreateWithoutClienteInput = {
    id?: string
    targa: string
    marca: string
    modello: string
    anno?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeicoloCreateOrConnectWithoutClienteInput = {
    where: VeicoloWhereUniqueInput
    create: XOR<VeicoloCreateWithoutClienteInput, VeicoloUncheckedCreateWithoutClienteInput>
  }

  export type VeicoloCreateManyClienteInputEnvelope = {
    data: VeicoloCreateManyClienteInput | VeicoloCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AppuntamentoCreateWithoutClienteInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
    servizio: ServizioCreateNestedOneWithoutAppuntamentiInput
  }

  export type AppuntamentoUncheckedCreateWithoutClienteInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    servizioId: string
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppuntamentoCreateOrConnectWithoutClienteInput = {
    where: AppuntamentoWhereUniqueInput
    create: XOR<AppuntamentoCreateWithoutClienteInput, AppuntamentoUncheckedCreateWithoutClienteInput>
  }

  export type AppuntamentoCreateManyClienteInputEnvelope = {
    data: AppuntamentoCreateManyClienteInput | AppuntamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type VeicoloUpsertWithWhereUniqueWithoutClienteInput = {
    where: VeicoloWhereUniqueInput
    update: XOR<VeicoloUpdateWithoutClienteInput, VeicoloUncheckedUpdateWithoutClienteInput>
    create: XOR<VeicoloCreateWithoutClienteInput, VeicoloUncheckedCreateWithoutClienteInput>
  }

  export type VeicoloUpdateWithWhereUniqueWithoutClienteInput = {
    where: VeicoloWhereUniqueInput
    data: XOR<VeicoloUpdateWithoutClienteInput, VeicoloUncheckedUpdateWithoutClienteInput>
  }

  export type VeicoloUpdateManyWithWhereWithoutClienteInput = {
    where: VeicoloScalarWhereInput
    data: XOR<VeicoloUpdateManyMutationInput, VeicoloUncheckedUpdateManyWithoutClienteInput>
  }

  export type VeicoloScalarWhereInput = {
    AND?: VeicoloScalarWhereInput | VeicoloScalarWhereInput[]
    OR?: VeicoloScalarWhereInput[]
    NOT?: VeicoloScalarWhereInput | VeicoloScalarWhereInput[]
    id?: StringFilter<"Veicolo"> | string
    targa?: StringFilter<"Veicolo"> | string
    marca?: StringFilter<"Veicolo"> | string
    modello?: StringFilter<"Veicolo"> | string
    anno?: IntNullableFilter<"Veicolo"> | number | null
    clienteId?: StringFilter<"Veicolo"> | string
    note?: StringNullableFilter<"Veicolo"> | string | null
    createdAt?: DateTimeFilter<"Veicolo"> | Date | string
    updatedAt?: DateTimeFilter<"Veicolo"> | Date | string
  }

  export type AppuntamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: AppuntamentoWhereUniqueInput
    update: XOR<AppuntamentoUpdateWithoutClienteInput, AppuntamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<AppuntamentoCreateWithoutClienteInput, AppuntamentoUncheckedCreateWithoutClienteInput>
  }

  export type AppuntamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: AppuntamentoWhereUniqueInput
    data: XOR<AppuntamentoUpdateWithoutClienteInput, AppuntamentoUncheckedUpdateWithoutClienteInput>
  }

  export type AppuntamentoUpdateManyWithWhereWithoutClienteInput = {
    where: AppuntamentoScalarWhereInput
    data: XOR<AppuntamentoUpdateManyMutationInput, AppuntamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type ClienteCreateWithoutVeicoliInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appuntamenti?: AppuntamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutVeicoliInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    createdAt?: Date | string
    updatedAt?: Date | string
    appuntamenti?: AppuntamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutVeicoliInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutVeicoliInput, ClienteUncheckedCreateWithoutVeicoliInput>
  }

  export type ClienteUpsertWithoutVeicoliInput = {
    update: XOR<ClienteUpdateWithoutVeicoliInput, ClienteUncheckedUpdateWithoutVeicoliInput>
    create: XOR<ClienteCreateWithoutVeicoliInput, ClienteUncheckedCreateWithoutVeicoliInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutVeicoliInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutVeicoliInput, ClienteUncheckedUpdateWithoutVeicoliInput>
  }

  export type ClienteUpdateWithoutVeicoliInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appuntamenti?: AppuntamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutVeicoliInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appuntamenti?: AppuntamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type RichiestaCreateManyServizioInput = {
    id?: string
    nome: string
    cognome: string
    email: string
    telefono: string
    note?: string | null
    stato?: $Enums.StatoRichiesta
    pdfGenerato?: boolean
    urlPdf?: string | null
    dataPreferita?: Date | string | null
    oraPreferita?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppuntamentoCreateManyServizioInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    clienteId: string
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RichiestaUpdateWithoutServizioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoRichiestaFieldUpdateOperationsInput | $Enums.StatoRichiesta
    pdfGenerato?: BoolFieldUpdateOperationsInput | boolean
    urlPdf?: NullableStringFieldUpdateOperationsInput | string | null
    dataPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oraPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichiestaUncheckedUpdateWithoutServizioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoRichiestaFieldUpdateOperationsInput | $Enums.StatoRichiesta
    pdfGenerato?: BoolFieldUpdateOperationsInput | boolean
    urlPdf?: NullableStringFieldUpdateOperationsInput | string | null
    dataPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oraPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RichiestaUncheckedUpdateManyWithoutServizioInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    cognome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoRichiestaFieldUpdateOperationsInput | $Enums.StatoRichiesta
    pdfGenerato?: BoolFieldUpdateOperationsInput | boolean
    urlPdf?: NullableStringFieldUpdateOperationsInput | string | null
    dataPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oraPreferita?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppuntamentoUpdateWithoutServizioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cliente?: ClienteUpdateOneRequiredWithoutAppuntamentiNestedInput
  }

  export type AppuntamentoUncheckedUpdateWithoutServizioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    clienteId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppuntamentoUncheckedUpdateManyWithoutServizioInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    clienteId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeicoloCreateManyClienteInput = {
    id?: string
    targa: string
    marca: string
    modello: string
    anno?: number | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppuntamentoCreateManyClienteInput = {
    id?: string
    data: Date | string
    ora: Date | string
    durata: number
    servizioId: string
    note?: string | null
    stato?: $Enums.StatoAppuntamento
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeicoloUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    targa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modello?: StringFieldUpdateOperationsInput | string
    anno?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeicoloUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    targa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modello?: StringFieldUpdateOperationsInput | string
    anno?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeicoloUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    targa?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    modello?: StringFieldUpdateOperationsInput | string
    anno?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppuntamentoUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servizio?: ServizioUpdateOneRequiredWithoutAppuntamentiNestedInput
  }

  export type AppuntamentoUncheckedUpdateWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    servizioId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppuntamentoUncheckedUpdateManyWithoutClienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    ora?: DateTimeFieldUpdateOperationsInput | Date | string
    durata?: IntFieldUpdateOperationsInput | number
    servizioId?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    stato?: EnumStatoAppuntamentoFieldUpdateOperationsInput | $Enums.StatoAppuntamento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}