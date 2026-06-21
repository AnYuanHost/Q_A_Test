# PollingDriven_StateCode

***

命名空间PollingDriven_StateCode定义如下：

    {
        namespace PollingDriven_StateCode {
	        constexpr unsigned int PD_Free			= 0;
	        constexpr unsigned int PD_Wait			= 1;
	        constexpr unsigned int PD_Active		= 2;
	        constexpr unsigned int PD_Processed		= 3;
        }
    }

轮询机状态代码（PollingDriven_StateCode）通过命名空间记录轮询机状态。

其中，各代码含义为：

    {
         namespace PollingDriven_StateCode {
	        constexpr unsigned int PD_Free			= 0;

            // Polling Driven Free
            // 轮询机空闲态，该状态是轮询机构造阶段，信息并不能保证完善

	        constexpr unsigned int PD_Wait			= 1;

            // Polling Driven Wait
            // 轮询机等待态，该状态轮询机已完成准备，可以准备执行

	        constexpr unsigned int PD_Active		= 2;

            // Polling Driven Active
            // 轮询机执行态，该状态轮询机正在执行

	        constexpr unsigned int PD_Processed		= 3;

            // Polling Driven Processed
            // 轮询机完成态，该状态轮询机完成执行
        }
    }