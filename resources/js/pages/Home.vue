<template>
	<div class="c-body">
        <main class="c-main">
          <div class="container-fluid">
            <div class="fade-in">
		        <div class="row">
		        	<div class="col-sm-6 col-md-4">
		        		<h5 class="text-info">AKTIF</h5>
						<div class="card text-white bg-info">
							<div class="card-body">
								Sinkronisasi siap dilakukan <br> <br>
								<router-link :to="{ name: 'sinkron' }" class="btn btn-light btn-sm">Sinkron</router-link>
							</div>
						</div>
					</div>
		        </div>
            </div>
          </div>
        </main>
    </div>
</template>
